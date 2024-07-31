### Roster Details<br />
Team Name: KOI<br />
Roster: adamS, dav1g, JUST, mopoz, stadodo<br />
Global Rank: [43](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [32]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1099.5<br />
<br />
Final Rank Value (1099.5) = Starting Rank Value (1104.1) + Head To Head Adjustments (-4.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.450[<sup>1</sup>](#table2)
- Bounty Collected: 0.445[<sup>2</sup>](#table1)
- Opponent Network: 0.236[<sup>2</sup>](#table1)
- LAN Wins: 0.233[<sup>2</sup>](#table1)

The average of these factors is 0.341<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1104.1
- 400 + ( ( 0.341 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 1104.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           46 |       10 | 2024-07-31 | Zero Tenacity   | L   | 1.000      | -            | -                | -                | -         |   -13.13 | adamS, dav1g, JUST, mopoz, stadodo |
|           45 |      171 | 2024-07-26 | EYEBALLERS      | W   | 1.000      | 0.500        | -                | 0.513 (0.257)    | 0 (0.000) |     5.45 | adamS, dav1g, JUST, mopoz, stadodo |
|           44 |      441 | 2024-07-18 | Monte           | L   | 1.000      | -            | -                | -                | -         |   -18.43 | adamS, dav1g, JUST, mopoz, stadodo |
|           43 |      582 | 2024-07-16 | Insilio         | W   | 1.000      | 0.500        | 0.023 (0.012)    | 0.554 (0.277)    | 0 (0.000) |     9.59 | adamS, dav1g, JUST, mopoz, stadodo |
|           42 |      849 | 2024-06-16 | 9z              | L   | 0.899      | -            | -                | -                | -         |    -3.46 | adamS, dav1g, JUST, mopoz, stadodo |
|           41 |      901 | 2024-06-14 | RED Canids      | W   | 0.888      | 0.548        | 0.079 (0.039)    | 0.738 (0.359)    | 1 (0.888) |    16.64 | adamS, dav1g, JUST, mopoz, stadodo |
|           40 |      904 | 2024-06-14 | Imperial        | W   | 0.888      | 0.548        | 0.245 (0.119)    | 0.685 (0.333)    | 1 (0.888) |    21.45 | adamS, dav1g, JUST, mopoz, stadodo |
|           39 |     1061 | 2024-06-09 | Sangal          | L   | 0.853      | -            | -                | -                | -         |    -9.36 | adamS, dav1g, JUST, mopoz, stadodo |
|           38 |     1255 | 2024-06-06 | SINNERS         | W   | 0.833      | 0.500        | 0.038 (0.016)    | 0.721 (0.300)    | 0 (0.000) |     9.47 | adamS, dav1g, JUST, mopoz, stadodo |
|           37 |     1317 | 2024-06-05 | 3DMAX           | W   | 0.826      | 0.500        | 0.504 (0.208)    | 1.000 (0.413)    | 0 (0.000) |    24.24 | adamS, dav1g, JUST, mopoz, stadodo |
|           36 |     1449 | 2024-06-01 | ENCE            | L   | 0.799      | -            | -                | -                | -         |    -3.63 | adamS, dav1g, JUST, mopoz, stadodo |
|           35 |     1457 | 2024-06-01 | Zero Tenacity   | L   | 0.798      | -            | -                | -                | -         |   -10.65 | adamS, dav1g, JUST, mopoz, stadodo |
|           34 |     2124 | 2024-05-09 | B8              | L   | 0.644      | -            | -                | -                | -         |   -10.64 | adamS, dav1g, JUST, mopoz, stadodo |
|           33 |     2286 | 2024-05-01 | Zero Tenacity   | L   | 0.591      | -            | -                | -                | -         |   -10.00 | adamS, dav1g, JUST, mopoz, stadodo |
|           32 |     2606 | 2024-04-18 | ex-Guild Eagles | L   | 0.506      | -            | -                | -                | -         |   -12.86 | adamS, dav1g, JUST, mopoz, stadodo |
|           31 |     2615 | 2024-04-18 | fnatic          | W   | 0.506      | 0.143        | 0.374 (0.027)    | -                | 0 (0.000) |    14.79 | adamS, dav1g, JUST, mopoz, stadodo |
|           30 |     2685 | 2024-04-16 | BLEED           | L   | 0.493      | -            | -                | -                | -         |    -9.56 | adamS, dav1g, JUST, mopoz, stadodo |
|           29 |     2818 | 2024-04-10 | RUSH B          | W   | 0.453      | 0.500        | -                | 0.308 (0.070)    | -         |     3.02 | adamS, dav1g, JUST, mopoz, stadodo |
|           28 |     2872 | 2024-04-09 | Aurora          | W   | 0.446      | 0.500        | 0.433 (0.097)    | 0.800 (0.178)    | -         |    13.54 | adamS, dav1g, JUST, mopoz, stadodo |
|           27 |     2878 | 2024-04-09 | Apeks           | L   | 0.446      | -            | -                | -                | -         |    -9.96 | adamS, dav1g, JUST, mopoz, stadodo |
|           26 |     2906 | 2024-04-08 | GUN5            | W   | 0.439      | -            | -                | -                | -         |     0.28 | adamS, dav1g, JUST, mopoz, stadodo |
|           25 |     2911 | 2024-04-08 | fnatic          | L   | 0.438      | -            | -                | -                | -         |    -0.90 | adamS, dav1g, JUST, mopoz, stadodo |
|           24 |     3012 | 2024-04-04 | NOM             | W   | 0.412      | -            | -                | -                | -         |     0.47 | adamS, dav1g, JUST, mopoz, stadodo |
|           23 |     3046 | 2024-04-03 | 9INE            | W   | 0.406      | -            | -                | -                | -         |     0.50 | adamS, dav1g, JUST, mopoz, stadodo |
|           22 |     3083 | 2024-04-02 | TSM             | W   | 0.400      | -            | -                | -                | -         |     1.17 | adamS, dav1g, JUST, mopoz, stadodo |
|           21 |     3149 | 2024-03-28 | EYEBALLERS      | L   | 0.366      | -            | -                | -                | -         |    -8.60 | adamS, dav1g, JUST, mopoz, stadodo |
|           20 |     3321 | 2024-03-18 | FURIA           | L   | 0.299      | -            | -                | -                | -         |    -0.27 | adamS, dav1g, JUST, mopoz, stadodo |
|           19 |     3338 | 2024-03-17 | ENCE            | L   | 0.293      | -            | -                | -                | -         |    -1.01 | adamS, dav1g, JUST, mopoz, stadodo |
|           18 |     3353 | 2024-03-17 | SAW             | L   | 0.292      | -            | -                | -                | -         |    -3.41 | adamS, dav1g, JUST, mopoz, stadodo |
|           17 |     3444 | 2024-03-13 | Sangal          | W   | 0.267      | 0.500        | 0.221 (0.029)    | 0.824 (0.110)    | -         |     4.57 | adamS, dav1g, JUST, mopoz, stadodo |
|           16 |     3499 | 2024-03-11 | B8              | L   | 0.253      | -            | -                | -                | -         |    -4.06 | adamS, dav1g, JUST, mopoz, stadodo |
|           15 |     3505 | 2024-03-11 | Apeks           | L   | 0.252      | -            | -                | -                | -         |    -5.81 | adamS, dav1g, JUST, mopoz, stadodo |
|           14 |     3617 | 2024-03-06 | 9 Pandas        | W   | 0.220      | 0.500        | 0.083 (0.009)    | 0.579 (0.064)    | -         |     2.58 | adamS, dav1g, JUST, mopoz, stadodo |
|           13 |     3654 | 2024-03-05 | FORZE           | W   | 0.214      | -            | -                | -                | -         |     1.81 | adamS, dav1g, JUST, mopoz, stadodo |
|           12 |     3660 | 2024-03-05 | Nemiga          | W   | 0.213      | 0.143        | 0.325 (0.010)    | -                | -         |     3.98 | adamS, dav1g, JUST, mopoz, stadodo |
|           11 |     3669 | 2024-03-05 | ex-Sprout       | W   | 0.212      | -            | -                | -                | -         |     0.25 | adamS, dav1g, JUST, mopoz, stadodo |
|           10 |     3710 | 2024-03-03 | The Chosen Few  | L   | 0.199      | -            | -                | -                | -         |    -5.77 | adamS, dav1g, JUST, mopoz, stadodo |
|            9 |     3762 | 2024-02-29 | Aurora          | L   | 0.180      | -            | -                | -                | -         |    -0.21 | adamS, dav1g, JUST, mopoz, stadodo |
|            8 |     3768 | 2024-02-29 | HAVU            | W   | 0.179      | -            | -                | -                | -         |     0.56 | adamS, dav1g, JUST, mopoz, stadodo |
|            7 |     3776 | 2024-02-28 | FORZE           | L   | 0.173      | -            | -                | -                | -         |    -4.13 | adamS, dav1g, JUST, mopoz, stadodo |
|            6 |     3780 | 2024-02-28 | kONO            | W   | 0.172      | -            | -                | -                | -         |     0.88 | adamS, dav1g, JUST, mopoz, stadodo |
|            5 |     4070 | 2024-02-16 | fnatic          | W   | 0.091      | -            | -                | -                | 1 (0.091) |     2.69 | adamS, dav1g, JUST, mopoz, stadodo |
|            4 |     4097 | 2024-02-15 | 9 Pandas        | W   | 0.084      | -            | -                | -                | 1 (0.084) |     0.98 | adamS, dav1g, JUST, mopoz, stadodo |
|            3 |     4123 | 2024-02-14 | 3DMAX           | W   | 0.079      | -            | -                | -                | 1 (0.079) |     2.41 | adamS, dav1g, JUST, mopoz, stadodo |
|            2 |     4136 | 2024-02-14 | Natus Vincere   | L   | 0.078      | -            | -                | -                | -         |    -0.02 | adamS, dav1g, JUST, mopoz, stadodo |
|            1 |     4294 | 2024-02-03 | SAW             | L   | 0.006      | -            | -                | -                | -         |    -0.07 | adamS, dav1g, JUST, mopoz, stadodo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($19,674.16)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.901 | $7,000.00      | $6,308.84       |
| 2024-06-09 |      0.853 | $12,000.00     | $10,237.11      |
| 2024-03-20 |      0.313 | $10,000.00     | $3,128.21       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
