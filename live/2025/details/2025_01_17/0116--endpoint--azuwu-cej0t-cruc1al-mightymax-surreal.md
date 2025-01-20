### Roster Details<br />
Team Name: Endpoint<br />
Roster: AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal<br />
Global Rank: [116](../../standings_global_2025_01_17.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_17.md)<br />
Regional Rank: [85]( ../../standings_europe_2025_01_17.md)<br />
<br />
Final Rank Value:  823.5<br />
<br />
Final Rank Value (823.5) = Starting Rank Value (843.3) + Head To Head Adjustments (-19.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.404[<sup>1</sup>](#table2)
- Bounty Collected: 0.338[<sup>2</sup>](#table1)
- Opponent Network: 0.153[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.223<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 843.3
- 400 + ( ( 0.223 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 843.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           65 |      250 | 2024-12-12 | ENCE              | L   | 0.958      | -            | -                | -                | -         |    -3.24 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           64 |      258 | 2024-12-11 | Fire Flux         | L   | 0.953      | -            | -                | -                | -         |   -12.07 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           63 |      262 | 2024-12-11 | KOI               | W   | 0.953      | 0.435        | 0.043 (0.018)    | 0.386 (0.160)    | 0 (0.000) |    20.49 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           62 |      271 | 2024-12-10 | JiJieHao          | L   | 0.946      | -            | -                | -                | -         |   -20.57 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           61 |      282 | 2024-12-09 | CYBERSHOKE        | W   | 0.939      | 0.435        | 0.018 (0.007)    | 0.627 (0.256)    | 0 (0.000) |    15.76 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           60 |      302 | 2024-12-08 | Insilio           | L   | 0.931      | -            | -                | -                | -         |   -17.44 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           59 |      356 | 2024-12-06 | Into the Breach   | L   | 0.919      | -            | -                | -                | -         |    -9.51 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           58 |      362 | 2024-12-06 | Illuminar         | L   | 0.917      | -            | -                | -                | -         |   -13.85 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           57 |      411 | 2024-12-04 | Fire Flux         | W   | 0.906      | 0.435        | 0.018 (0.007)    | 0.629 (0.248)    | 0 (0.000) |    15.03 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           56 |      453 | 2024-12-02 | TSM               | L   | 0.891      | -            | -                | -                | -         |   -12.62 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           55 |      592 | 2024-11-24 | Fire Flux         | W   | 0.839      | 0.333        | -                | 0.629 (0.176)    | 0 (0.000) |    14.57 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           54 |      618 | 2024-11-23 | PCIFIC            | W   | 0.832      | -            | -                | -                | 0 (0.000) |     4.17 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           53 |     1003 | 2024-11-07 | Sashi             | L   | 0.726      | -            | -                | -                | -         |    -6.37 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           52 |     1075 | 2024-11-03 | Aurora Young Blud | W   | 0.699      | 0.384        | 0.045 (0.012)    | 0.838 (0.225)    | 0 (0.000) |    13.82 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           51 |     1105 | 2024-11-02 | 9 Pandas          | L   | 0.692      | -            | -                | -                | -         |    -3.24 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           50 |     1110 | 2024-11-02 | Rebels            | L   | 0.691      | -            | -                | -                | -         |   -11.13 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           49 |     1126 | 2024-11-01 | SINNERS           | L   | 0.685      | -            | -                | -                | -         |    -5.14 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           48 |     1179 | 2024-10-29 | Johnny Speeds     | L   | 0.667      | -            | -                | -                | -         |    -5.18 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           47 |     1184 | 2024-10-29 | Rare Atom         | W   | 0.666      | 0.333        | 0.059 (0.013)    | -                | 0 (0.000) |    14.46 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           46 |     1187 | 2024-10-29 | Gaimin Gladiators | L   | 0.665      | -            | -                | -                | -         |    -6.42 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           45 |     1220 | 2024-10-27 | Rebels            | W   | 0.651      | 0.371        | 0.035 (0.008)    | 0.302 (0.073)    | 0 (0.000) |    10.24 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           44 |     1284 | 2024-10-24 | NewBALLS          | W   | 0.631      | -            | -                | -                | 0 (0.000) |     3.26 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           43 |     1330 | 2024-10-20 | DMS               | L   | 0.605      | -            | -                | -                | -         |   -11.38 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           42 |     1522 | 2024-10-11 | ARCRED            | W   | 0.545      | 0.384        | 0.047 (0.010)    | -                | 0 (0.000) |     6.84 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           41 |     1988 | 2024-09-27 | WW                | L   | 0.451      | -            | -                | -                | -         |   -11.98 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           40 |     2069 | 2024-09-25 | Aurora            | L   | 0.440      | -            | -                | -                | -         |    -5.38 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           39 |     2082 | 2024-09-25 | CPH Wolves        | L   | 0.438      | -            | -                | -                | -         |    -7.91 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           38 |     2121 | 2024-09-24 | Into the Breach   | L   | 0.433      | -            | -                | -                | -         |    -5.73 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           37 |     2233 | 2024-09-20 | CYBERSHOKE        | W   | 0.406      | 0.435        | -                | 0.627 (0.111)    | -         |     6.47 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           36 |     2301 | 2024-09-18 | Insilio           | W   | 0.393      | -            | -                | -                | -         |     5.72 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           35 |     2362 | 2024-09-16 | FAVBET            | L   | 0.378      | -            | -                | -                | -         |    -4.97 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           34 |     2395 | 2024-09-15 | Nexus             | W   | 0.371      | -            | -                | -                | -         |     0.81 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           33 |     2567 | 2024-09-09 | NAVI Junior       | L   | 0.333      | -            | -                | -                | -         |    -2.79 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           32 |     2619 | 2024-09-07 | CPH Wolves        | W   | 0.319      | -            | -                | -                | -         |     3.74 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           31 |     2647 | 2024-09-06 | GamerLegion       | L   | 0.312      | -            | -                | -                | -         |    -5.52 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           30 |     2676 | 2024-09-05 | GL Academy        | W   | 0.306      | -            | -                | -                | -         |     0.65 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           29 |     2749 | 2024-09-03 | Anonymo           | W   | 0.293      | 0.372        | 0.064 (0.007)    | -                | -         |     4.29 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           28 |     2777 | 2024-09-02 | 9INE              | W   | 0.286      | 0.435        | 0.125 (0.016)    | 1.000 (0.124)    | -         |     6.22 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           27 |     2830 | 2024-08-30 | CPH Wolves        | W   | 0.266      | -            | -                | -                | -         |     3.19 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           26 |     2837 | 2024-08-30 | OG                | L   | 0.265      | -            | -                | -                | -         |    -3.13 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           25 |     2935 | 2024-08-28 | EYEBALLERS        | W   | 0.251      | -            | -                | -                | -         |     3.83 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           24 |     2975 | 2024-08-27 | B8                | L   | 0.246      | -            | -                | -                | -         |    -1.41 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           23 |     2987 | 2024-08-27 | Revenant          | L   | 0.245      | -            | -                | -                | -         |    -4.97 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           22 |     3052 | 2024-08-26 | Passion UA        | W   | 0.239      | 0.435        | 0.109 (0.011)    | 0.830 (0.086)    | -         |     6.54 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           21 |     3194 | 2024-08-22 | DASH              | L   | 0.211      | -            | -                | -                | -         |    -4.74 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           20 |     3341 | 2024-08-18 | los kogutos       | W   | 0.187      | 0.435        | -                | 0.841 (0.068)    | -         |     5.06 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           19 |     3347 | 2024-08-18 | BetBoom           | L   | 0.185      | -            | -                | -                | -         |    -1.16 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           18 |     3370 | 2024-08-17 | Insilio           | W   | 0.179      | -            | -                | -                | -         |     2.32 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           17 |     3387 | 2024-08-16 | RUBY              | W   | 0.173      | -            | -                | -                | -         |     0.89 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           16 |     3437 | 2024-08-15 | Rhyno             | L   | 0.164      | -            | -                | -                | -         |    -3.24 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           15 |     3483 | 2024-08-13 | DMS               | W   | 0.151      | -            | -                | -                | -         |     1.38 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           14 |     3533 | 2024-08-12 | SINNERS           | W   | 0.145      | -            | -                | -                | -         |     3.67 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           13 |     3559 | 2024-08-11 | Nemiga            | L   | 0.138      | -            | -                | -                | -         |    -0.38 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           12 |     3572 | 2024-08-10 | CYBERSHOKE        | L   | 0.133      | -            | -                | -                | -         |    -2.19 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           11 |     3579 | 2024-08-10 | Sashi             | W   | 0.131      | -            | -                | -                | -         |     2.95 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           10 |     3606 | 2024-08-09 | MOUZ NXT          | W   | 0.125      | -            | -                | -                | -         |     1.12 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            9 |     3625 | 2024-08-08 | SovvyKiNG         | W   | 0.119      | -            | -                | -                | -         |     0.63 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            8 |     3640 | 2024-08-08 | Passion UA        | W   | 0.117      | -            | -                | -                | -         |     3.22 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            7 |     3723 | 2024-08-06 | DMS               | W   | 0.105      | -            | -                | -                | -         |     0.98 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            6 |     3937 | 2024-07-31 | K27               | W   | 0.065      | -            | -                | -                | -         |     0.36 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            5 |     3944 | 2024-07-31 | los kogutos       | W   | 0.065      | -            | -                | -                | -         |     1.81 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            4 |     3994 | 2024-07-30 | GUN5              | L   | 0.057      | -            | -                | -                | -         |    -0.37 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            3 |     4060 | 2024-07-28 | SovvyKiNG         | W   | 0.044      | -            | -                | -                | -         |     0.24 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            2 |     4093 | 2024-07-26 | Sampi             | L   | 0.032      | -            | -                | -                | -         |    -0.31 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            1 |     4146 | 2024-07-25 | Monte             | L   | 0.024      | -            | -                | -                | -         |    -0.20 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,526.66)
- Divide that value by the 5th highest value among all rosters ($225,816.70)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-24 |      0.839 | $5,000.00      | $4,197.09       |
| 2024-09-21 |      0.412 | $1,250.00      | $514.89         |
| 2024-08-28 |      0.253 | $2,000.00      | $505.60         |
| 2024-08-18 |      0.186 | $5,000.00      | $928.76         |
| 2024-08-11 |      0.138 | $10,000.00     | $1,380.33       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
