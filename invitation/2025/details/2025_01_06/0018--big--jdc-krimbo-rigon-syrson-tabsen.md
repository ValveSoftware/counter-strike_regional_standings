### Roster Details<br />
Team Name: BIG<br />
Roster: JDC, Krimbo, rigoN, syrsoN, tabseN<br />
Global Rank: [18](../../standings_global_2025_01_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_06.md)<br />
Regional Rank: [13]( ../../standings_europe_2025_01_06.md)<br />
<br />
Final Rank Value:  1332.6<br />
<br />
Final Rank Value (1332.6) = Starting Rank Value (1407.5) + Head To Head Adjustments (-74.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.619[<sup>1</sup>](#table2)
- Bounty Collected: 0.430[<sup>2</sup>](#table1)
- Opponent Network: 0.124[<sup>2</sup>](#table1)
- LAN Wins: 0.865[<sup>2</sup>](#table1)

The average of these factors is 0.510<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1407.5
- 400 + ( ( 0.510 - 0.000 ) / ( 0.809 - 0.000 ) ) * 1600 = 1407.5


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
|           41 |      161 | 2024-12-14 | Arrow           | L   | 1.000      | -            | -                | -                | -         |   -29.66 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           40 |      319 | 2024-12-06 | paiN            | L   | 0.992      | -            | -                | -                | -         |   -12.53 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           39 |      343 | 2024-12-05 | G2              | L   | 0.985      | -            | -                | -                | -         |    -1.13 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           38 |      353 | 2024-12-04 | HEROIC          | L   | 0.984      | -            | -                | -                | -         |    -4.67 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           37 |      395 | 2024-12-02 | Complexity      | W   | 0.970      | -            | -                | -                | 1 (0.970) |    14.83 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           36 |      416 | 2024-12-01 | FURIA           | L   | 0.964      | -            | -                | -                | -         |    -7.37 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           35 |      435 | 2024-11-30 | Virtus.pro      | W   | 0.956      | 0.143        | 0.158 (0.022)    | -                | 1 (0.956) |    12.86 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           34 |      462 | 2024-11-30 | FlyQuest        | L   | 0.951      | -            | -                | -                | -         |   -15.96 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           33 |      467 | 2024-11-29 | Passion UA      | W   | 0.950      | 0.143        | -                | 0.885 (0.120)    | 1 (0.950) |     6.75 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           32 |      617 | 2024-11-22 | Passion UA      | W   | 0.898      | 0.143        | -                | 0.885 (0.114)    | 1 (0.898) |     6.20 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           31 |      628 | 2024-11-21 | HEROIC          | W   | 0.893      | 0.143        | 0.822 (0.105)    | -                | 1 (0.893) |    24.61 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           30 |      640 | 2024-11-21 | Sashi           | W   | 0.891      | -            | -                | -                | 1 (0.891) |     4.09 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           29 |      894 | 2024-11-11 | GUN5            | L   | 0.825      | -            | -                | -                | -         |   -20.11 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           28 |     1051 | 2024-11-02 | ALTERNATE aTTaX | W   | 0.768      | -            | -                | -                | -         |     2.91 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           27 |     1207 | 2024-10-26 | OG              | L   | 0.719      | -            | -                | -                | -         |   -20.18 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           26 |     1234 | 2024-10-24 | BESTIA          | W   | 0.708      | 0.477        | 0.103 (0.035)    | 0.512 (0.173)    | -         |     4.40 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           25 |     1243 | 2024-10-24 | Aurora          | W   | 0.705      | 0.477        | 0.056 (0.019)    | 0.314 (0.106)    | -         |     2.13 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           24 |     1596 | 2024-10-06 | FlyQuest        | L   | 0.589      | -            | -                | -                | -         |   -10.36 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           23 |     1602 | 2024-10-06 | SAW             | W   | 0.588      | 0.500        | 0.262 (0.077)    | 0.479 (0.141)    | 1 (0.588) |     9.86 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           22 |     1667 | 2024-10-04 | M80             | W   | 0.575      | 0.500        | 0.142 (0.041)    | 0.461 (0.133)    | 1 (0.575) |     5.37 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           21 |     1675 | 2024-10-04 | ODDIK           | W   | 0.574      | 0.500        | 0.092 (0.026)    | 0.407 (0.117)    | 1 (0.574) |     1.73 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           20 |     2034 | 2024-09-25 | ECSTATIC        | L   | 0.513      | -            | -                | -                | -         |   -14.35 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           19 |     2089 | 2024-09-24 | Monte           | L   | 0.506      | -            | -                | -                | -         |   -13.75 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           18 |     2298 | 2024-09-17 | The MongolZ     | L   | 0.459      | -            | -                | -                | -         |    -0.94 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           17 |     2406 | 2024-09-13 | Complexity      | W   | 0.434      | 0.889        | 0.126 (0.049)    | 0.306 (0.118)    | 1 (0.434) |     6.60 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           16 |     2436 | 2024-09-12 | fnatic          | W   | 0.427      | 0.889        | 0.189 (0.072)    | 0.326 (0.124)    | -         |     3.15 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           15 |     2476 | 2024-09-11 | Rooster         | W   | 0.420      | -            | -                | -                | -         |     0.28 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           14 |     2502 | 2024-09-10 | Imperial        | L   | 0.414      | -            | -                | -                | -         |    -9.89 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           13 |     3027 | 2024-08-26 | ALTERNATE aTTaX | L   | 0.312      | -            | -                | -                | -         |    -8.27 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           12 |     3080 | 2024-08-24 | Virtus.pro      | L   | 0.302      | -            | -                | -                | -         |    -5.64 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           11 |     3101 | 2024-08-23 | GamerLegion     | W   | 0.295      | 0.535        | 0.190 (0.030)    | 0.616 (0.097)    | -         |     4.26 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           10 |     3113 | 2024-08-23 | los kogutos     | W   | 0.293      | -            | -                | -                | -         |     1.96 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|            9 |     3153 | 2024-08-22 | Qiang           | W   | 0.285      | -            | -                | -                | -         |     0.14 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|            8 |     3179 | 2024-08-21 | Insilio         | W   | 0.280      | -            | -                | -                | -         |     0.31 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|            7 |     3233 | 2024-08-21 | Passion UA      | L   | 0.278      | -            | -                | -                | -         |    -6.52 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|            6 |     3556 | 2024-08-09 | Falcons         | L   | 0.200      | -            | -                | -                | -         |    -5.68 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|            5 |     3588 | 2024-08-08 | SAW             | L   | 0.193      | -            | -                | -                | -         |    -3.31 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|            4 |     3641 | 2024-08-07 | FlyQuest        | W   | 0.185      | -            | -                | -                | -         |     2.13 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|            3 |     3795 | 2024-08-02 | Natus Vincere   | L   | 0.154      | -            | -                | -                | -         |    -0.55 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|            2 |     3831 | 2024-08-01 | Virtus.pro      | W   | 0.148      | -            | -                | -                | -         |     1.91 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|            1 |     3893 | 2024-07-31 | Natus Vincere   | L   | 0.140      | -            | -                | -                | -         |    -0.49 | JDC, Krimbo, rigoN, syrsoN, tabseN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($64,513.30)
- Divide that value by the 5th highest value among all rosters ($265,541.19)
- The final value (0.24) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      1.000 | $20,000.00     | $20,000.00      |
| 2024-12-14 |      1.000 | $3,668.00      | $3,668.00       |
| 2024-11-12 |      0.833 | $1,000.00      | $833.46         |
| 2024-10-26 |      0.722 | $20,000.00     | $14,434.70      |
| 2024-10-06 |      0.589 | $20,000.00     | $11,775.51      |
| 2024-09-26 |      0.520 | $1,000.00      | $520.36         |
| 2024-09-22 |      0.494 | $17,500.00     | $8,652.50       |
| 2024-08-25 |      0.308 | $7,500.00      | $2,307.19       |
| 2024-08-09 |      0.201 | $4,500.00      | $905.56         |
| 2024-08-04 |      0.167 | $8,500.00      | $1,416.01       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
