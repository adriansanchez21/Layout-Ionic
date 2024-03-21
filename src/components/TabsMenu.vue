<!-- <template>
    <ion-page>
        <ion-tabs>
            <ion-router-outlet></ion-router-outlet>
                <ion-tab-bar slot="bottom">
                    <ion-tab-button tab="home" href="/home">Home</ion-tab-button>
                    <ion-tab-button tab="library" href="/library">Library</ion-tab-button>
                    <ion-tab-button tab="search" href="/search">Search</ion-tab-button>
                    <ion-tab-button tab="radio" href="/radio">Radio</ion-tab-button>
                </ion-tab-bar>
        </ion-tabs>
    </ion-page>
</template>

<script lang="ts" setup>
import { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton } from '@ionic/vue';
</script>

 -->

<template>
  <ion-menu content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-button tab="home" href="/home">Home</ion-button>
      <ion-button tab="library" href="/library">Library</ion-button>
      <ion-button tab="search" href="/search">Search</ion-button>
      <ion-button tab="radio" href="/radio">Radio</ion-button>
    </ion-tabs>

  </ion-menu>
  <ion-page id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding"><ion-router-outlet></ion-router-outlet></ion-content>


  </ion-page>
</template>

<script lang="ts" setup>
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar, IonRouterOutlet, IonTabs, IonButton } from '@ionic/vue';
</script>