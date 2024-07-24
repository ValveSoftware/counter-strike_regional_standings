### Roster Details<br />
Team Name: 3DMAX<br />
Roster: Djoko, Ex3rcice, Graviti, Lucky, Maka<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [34](../standings_global.md)<br />
Regional Rank: [22]( ../standings_europe.md)<br />
Final Rank Value:  1182.1<br />
<br />
Final Rank Value (1182.1) = Starting Rank Value (1239.5) + Head To Head Adjustments (-57.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.569[<sup>1</sup>](#table2)
- Bounty Collected: 0.488[<sup>2</sup>](#table1)
- Opponent Network: 0.328[<sup>2</sup>](#table1)
- LAN Wins: 0.273[<sup>2</sup>](#table1)

The average of these factors is 0.415<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1239.5
- 400 + ( ( 0.415 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 1239.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           73 |       13 | 2024-07-24 | AMKAL             | W   | 1.000      | 0.650        | 0.111 (0.072)    | 0.515 (0.335)    | 1 (1.000) |    16.79 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           72 |      270 | 2024-07-17 | 9 Pandas          | W   | 1.000      | 0.500        | 0.105 (0.053)    | 0.578 (0.289)    | 0 (0.000) |    11.71 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           71 |      383 | 2024-07-15 | TSM               | L   | 1.000      | -            | -                | -                | -         |   -22.11 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           70 |      510 | 2024-07-08 | Latvia            | L   | 1.000      | -            | -                | -                | -         |   -27.18 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           69 |      591 | 2024-06-17 | 5W                | L   | 0.952      | -            | -                | -                | -         |   -22.24 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           68 |      605 | 2024-06-16 | B8                | L   | 0.947      | -            | -                | -                | -         |   -17.85 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           67 |      612 | 2024-06-16 | Permitta          | W   | 0.946      | 0.435        | -                | 0.790 (0.325)    | 0 (0.000) |     5.05 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           66 |      617 | 2024-06-16 | Enterprise        | W   | 0.945      | 0.450        | -                | 0.646 (0.275)    | 0 (0.000) |     5.11 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           65 |      632 | 2024-06-15 | GUN5              | W   | 0.940      | 0.435        | 0.093 (0.038)    | -                | 0 (0.000) |     6.40 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           64 |      650 | 2024-06-15 | BLEED             | W   | 0.939      | -            | -                | -                | 0 (0.000) |    15.95 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           63 |      683 | 2024-06-14 | Sashi             | W   | 0.933      | -            | -                | -                | 0 (0.000) |    14.96 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           62 |      696 | 2024-06-14 | Passion UA        | W   | 0.931      | 0.435        | 0.163 (0.066)    | 1.000 (0.405)    | -         |     9.40 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           61 |      709 | 2024-06-13 | 9INE              | W   | 0.927      | -            | -                | -                | -         |     4.60 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           60 |      727 | 2024-06-13 | VP.Prodigy        | W   | 0.925      | -            | -                | -                | -         |     4.92 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           59 |      758 | 2024-06-11 | SINNERS           | W   | 0.914      | -            | -                | -                | -         |     7.50 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           58 |      769 | 2024-06-11 | BUHAWI            | W   | 0.913      | -            | -                | -                | -         |     0.38 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           57 |      785 | 2024-06-10 | EYEBALLERS        | W   | 0.907      | -            | -                | -                | -         |     5.13 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           56 |      792 | 2024-06-10 | SAW               | W   | 0.905      | -            | -                | -                | -         |    14.97 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           55 |      799 | 2024-06-10 | PARIVISION        | W   | 0.905      | -            | -                | -                | -         |    10.10 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           54 |      803 | 2024-06-10 | 9 Pandas          | W   | 0.905      | -            | -                | -                | -         |    11.87 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           53 |      826 | 2024-06-09 | 9INE              | L   | 0.900      | -            | -                | -                | -         |   -23.15 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           52 |      841 | 2024-06-09 | Monte             | L   | 0.899      | -            | -                | -                | -         |   -21.02 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           51 |      849 | 2024-06-09 | SINNERS           | L   | 0.899      | -            | -                | -                | -         |   -20.79 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           50 |      854 | 2024-06-09 | Aurora            | W   | 0.898      | 0.143        | 0.423 (0.054)    | -                | -         |    21.61 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           49 |      863 | 2024-06-09 | RUSH B            | W   | 0.898      | -            | -                | -                | -         |     4.18 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           48 |      898 | 2024-06-08 | Illuminar         | L   | 0.893      | -            | -                | -                | -         |   -24.09 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           47 |      957 | 2024-06-07 | Gaimin Gladiators | W   | 0.886      | -            | -                | -                | -         |     8.15 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           46 |      993 | 2024-06-06 | Nexus             | W   | 0.881      | -            | -                | -                | -         |     2.48 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           45 |     1006 | 2024-06-06 | Sangal            | L   | 0.880      | -            | -                | -                | -         |   -16.08 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           44 |     1075 | 2024-06-05 | KOI               | L   | 0.873      | -            | -                | -                | -         |   -18.78 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           43 |     1121 | 2024-06-04 | Aurora            | W   | 0.867      | 0.500        | 0.423 (0.183)    | 0.783 (0.339)    | -         |    21.95 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           42 |     1204 | 2024-06-01 | VP.Prodigy        | L   | 0.847      | -            | -                | -                | -         |   -22.11 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           41 |     1254 | 2024-05-30 | Sampi             | W   | 0.834      | 0.435        | -                | 0.994 (0.360)    | -         |     4.23 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           40 |     1381 | 2024-05-25 | MOUZ NXT          | L   | 0.798      | -            | -                | -                | -         |   -18.34 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           39 |     1406 | 2024-05-23 | Zero Tenacity     | W   | 0.786      | 0.435        | 0.173 (0.059)    | 1.000 (0.342)    | -         |     8.33 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           38 |     1618 | 2024-05-17 | B8                | L   | 0.745      | -            | -                | -                | -         |   -15.02 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           37 |     1704 | 2024-05-15 | Zero Tenacity     | L   | 0.732      | -            | -                | -                | -         |   -17.02 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           36 |     1901 | 2024-05-08 | G2                | L   | 0.686      | -            | -                | -                | -         |    -0.47 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           35 |     2042 | 2024-05-01 | Sashi             | L   | 0.639      | -            | -                | -                | -         |   -11.72 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           34 |     2068 | 2024-04-30 | BetBoom           | W   | 0.632      | 0.384        | 0.333 (0.081)    | -                | -         |    15.11 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           33 |     2075 | 2024-04-29 | PARIVISION        | W   | 0.627      | -            | -                | -                | -         |     4.87 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           32 |     2123 | 2024-04-27 | Astralis          | L   | 0.613      | -            | -                | -                | -         |    -1.07 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           31 |     2195 | 2024-04-24 | fnatic            | W   | 0.593      | 0.889        | 0.428 (0.226)    | 0.666 (0.351)    | 1 (0.593) |    16.00 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           30 |     2220 | 2024-04-23 | SAW               | W   | 0.585      | 0.889        | 0.121 (0.063)    | 0.500 (0.260)    | 1 (0.585) |     8.35 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           29 |     2230 | 2024-04-22 | ex-Guild Eagles   | W   | 0.580      | -            | -                | -                | -         |     2.42 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           28 |     2415 | 2024-04-17 | BLEED             | W   | 0.545      | -            | -                | -                | -         |     4.86 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           27 |     2483 | 2024-04-14 | BetBoom           | L   | 0.526      | -            | -                | -                | -         |    -3.37 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           26 |     2498 | 2024-04-13 | ex-Preasy         | W   | 0.519      | -            | -                | -                | -         |     2.14 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           25 |     2540 | 2024-04-11 | Passion UA        | L   | 0.506      | -            | -                | -                | -         |   -11.85 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           24 |     2574 | 2024-04-10 | SINNERS           | L   | 0.501      | -            | -                | -                | -         |   -10.98 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           23 |     2623 | 2024-04-09 | SAW               | W   | 0.494      | -            | -                | -                | -         |     7.23 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           22 |     2700 | 2024-04-07 | Young Ninjas      | W   | 0.479      | -            | -                | -                | -         |     1.17 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           21 |     2773 | 2024-04-04 | Space             | W   | 0.459      | -            | -                | -                | -         |     1.44 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           20 |     2802 | 2024-04-03 | GUN5              | W   | 0.454      | -            | -                | -                | -         |     2.41 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           19 |     2853 | 2024-04-02 | Permitta          | W   | 0.446      | -            | -                | -                | -         |     2.58 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           18 |     2908 | 2024-03-28 | Apeks             | W   | 0.413      | -            | -                | -                | -         |     2.49 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           17 |     3031 | 2024-03-21 | fnatic            | L   | 0.366      | -            | -                | -                | -         |    -1.37 | Djoko, Ex3rcice, Lucky, Maka, NBK-     |
|           16 |     3073 | 2024-03-19 | GUN5              | W   | 0.353      | -            | -                | -                | -         |     0.11 | Djoko, Ex3rcice, Lucky, Maka, NBK-     |
|           15 |     3144 | 2024-03-15 | B8                | W   | 0.327      | -            | -                | -                | -         |     3.52 | Djoko, Ex3rcice, Lucky, Maka, misutaaa |
|           14 |     3212 | 2024-03-13 | PARIVISION        | L   | 0.313      | -            | -                | -                | -         |    -7.21 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           13 |     3425 | 2024-03-05 | FORZE             | L   | 0.260      | -            | -                | -                | -         |    -6.84 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           12 |     3447 | 2024-03-04 | fnatic            | L   | 0.252      | -            | -                | -                | -         |    -1.00 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           11 |     3485 | 2024-03-02 | Monte             | W   | 0.240      | -            | -                | -                | -         |     2.12 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           10 |     3522 | 2024-02-29 | Gaimin Gladiators | W   | 0.227      | -            | -                | -                | -         |     1.76 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            9 |     3819 | 2024-02-16 | 9 Pandas          | L   | 0.140      | -            | -                | -                | -         |    -3.27 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            8 |     3844 | 2024-02-15 | Into the Breach   | W   | 0.133      | -            | -                | -                | 1 (0.133) |     0.14 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            7 |     3881 | 2024-02-14 | KOI               | L   | 0.127      | -            | -                | -                | -         |    -2.64 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            6 |     3887 | 2024-02-14 | Falcons           | L   | 0.126      | -            | -                | -                | -         |    -0.94 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            5 |     3936 | 2024-02-11 | Apeks             | L   | 0.107      | -            | -                | -                | -         |    -2.77 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            4 |     3959 | 2024-02-09 | fnatic            | W   | 0.093      | -            | -                | -                | -         |     2.61 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            3 |     3962 | 2024-02-09 | Endpoint          | W   | 0.093      | -            | -                | -                | -         |     0.38 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            2 |     3965 | 2024-02-09 | ex-Sprout         | L   | 0.092      | -            | -                | -                | -         |    -2.85 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            1 |     4152 | 2024-01-30 | Permitta          | L   | 0.026      | -            | -                | -                | -         |    -0.70 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($48,438.56)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.18) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-17 |      0.952 | $10,000.00     | $9,522.64       |
| 2024-06-16 |      0.947 | $10,000.00     | $9,465.57       |
| 2024-06-09 |      0.900 | $7,000.00      | $6,302.66       |
| 2024-06-02 |      0.853 | $2,000.00      | $1,705.58       |
| 2024-05-26 |      0.806 | $2,000.00      | $1,612.79       |
| 2024-05-12 |      0.713 | $23,500.00     | $16,755.97      |
| 2024-05-02 |      0.647 | $1,500.00      | $969.93         |
| 2024-04-14 |      0.526 | $4,000.00      | $2,103.43       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
