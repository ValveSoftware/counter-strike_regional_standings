### Roster Details<br />
Team Name: Johnny Speeds<br />
Roster: bobeksde, chawzyyy, draken, Ro1f, spooke<br />
Global Rank: [32](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [24]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1171.5<br />
<br />
Final Rank Value (1171.5) = Starting Rank Value (1250.1) + Head To Head Adjustments (-78.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.523[<sup>1</sup>](#table2)
- Bounty Collected: 0.408[<sup>2</sup>](#table1)
- Opponent Network: 0.230[<sup>2</sup>](#table1)
- LAN Wins: 0.562[<sup>2</sup>](#table1)

The average of these factors is 0.431<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1250.1
- 400 + ( ( 0.431 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 1250.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           60 |       42 | 2024-08-13 | kONO            | L   | 1.000      | -            | -                | -                | -         |   -26.41 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           59 |       94 | 2024-08-12 | TSM             | L   | 1.000      | -            | -                | -                | -         |   -23.55 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           58 |      135 | 2024-08-10 | Enterprise      | W   | 1.000      | 0.333        | -                | 0.687 (0.229)    | 0 (0.000) |     5.24 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           57 |      188 | 2024-08-08 | TSM             | W   | 1.000      | 0.333        | 0.055 (0.018)    | 0.729 (0.243)    | 0 (0.000) |     7.64 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           56 |      222 | 2024-08-07 | Metizport       | L   | 1.000      | -            | -                | -                | -         |   -27.12 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           55 |      239 | 2024-08-07 | ECSTATIC        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.88 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           54 |      285 | 2024-08-06 | BLEED           | W   | 1.000      | 0.143        | 0.117 (0.017)    | -                | -         |    16.92 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           53 |      287 | 2024-08-06 | Metizport       | W   | 1.000      | -            | -                | -                | -         |     3.21 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           52 |      300 | 2024-08-05 | Into the Breach | W   | 1.000      | -            | -                | -                | -         |     3.26 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           51 |      311 | 2024-08-05 | 9 Pandas        | L   | 1.000      | -            | -                | -                | -         |   -21.76 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           50 |      338 | 2024-08-04 | 3DMAX           | W   | 1.000      | 0.143        | 0.508 (0.073)    | -                | -         |    23.69 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           49 |      365 | 2024-08-03 | Cloud9          | W   | 1.000      | -            | -                | -                | -         |     2.63 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           48 |      418 | 2024-08-02 | Nemiga          | W   | 1.000      | 0.143        | 0.365 (0.052)    | -                | -         |    14.19 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           47 |      509 | 2024-07-31 | fnatic          | W   | 1.000      | 0.143        | 0.352 (0.050)    | -                | -         |    23.78 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           46 |      848 | 2024-07-20 | Nexus           | W   | 1.000      | -            | -                | -                | -         |     3.34 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           45 |      867 | 2024-07-20 | Illuminar       | L   | 1.000      | -            | -                | -                | -         |   -25.90 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           44 |      881 | 2024-07-19 | Preasy          | W   | 1.000      | -            | -                | -                | -         |     2.90 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           43 |      943 | 2024-07-18 | 9INE            | W   | 1.000      | 0.333        | -                | 0.557 (0.186)    | -         |     5.49 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           42 |      950 | 2024-07-18 | Passion UA      | L   | 1.000      | -            | -                | -                | -         |   -23.00 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           41 |     1070 | 2024-07-16 | Young Ninjas    | W   | 1.000      | -            | -                | -                | -         |     2.46 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           40 |     1117 | 2024-07-15 | Endpoint        | W   | 0.999      | 0.371        | 0.042 (0.016)    | 0.591 (0.219)    | -         |     5.25 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           39 |     1164 | 2024-07-12 | TSM             | L   | 0.977      | -            | -                | -                | -         |   -22.12 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           38 |     1202 | 2024-07-10 | Sashi           | W   | 0.965      | 0.358        | 0.183 (0.063)    | 1.000 (0.345)    | -         |    13.25 | bobeksde, chawzyyy, Ro1f, SHiNE, spooke   |
|           37 |     1204 | 2024-07-10 | Endpoint        | W   | 0.964      | 0.358        | 0.042 (0.015)    | 0.591 (0.204)    | -         |     4.91 | bobeksde, chawzyyy, Ro1f, SHiNE, spooke   |
|           36 |     1225 | 2024-07-09 | 9INE            | W   | 0.958      | 0.371        | -                | 0.557 (0.198)    | -         |     5.07 | bobeksde, chawzyyy, Ro1f, SHiNE, spooke   |
|           35 |     1227 | 2024-07-09 | Revenant        | L   | 0.957      | -            | -                | -                | -         |   -26.07 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           34 |     1250 | 2024-07-07 | lajtbitexe      | W   | 0.945      | -            | -                | -                | -         |     1.73 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           33 |     1258 | 2024-07-05 | kONO            | W   | 0.932      | 0.333        | -                | 0.603 (0.187)    | -         |     3.92 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           32 |     1268 | 2024-06-30 | Young Gods      | W   | 0.899      | -            | -                | -                | -         |     1.42 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           31 |     1290 | 2024-06-27 | Revenant        | W   | 0.877      | -            | -                | -                | -         |     3.52 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           30 |     1294 | 2024-06-25 | Revenant        | W   | 0.865      | -            | -                | -                | -         |     3.45 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           29 |     1301 | 2024-06-23 | los kogutos     | W   | 0.851      | -            | -                | -                | -         |     0.28 | bobeksde, chawzyyy, draken, Lekr0, spooke |
|           28 |     1369 | 2024-06-15 | Lilmix          | W   | 0.799      | -            | -                | -                | 1 (0.799) |     2.83 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           27 |     1409 | 2024-06-14 | Lilmix          | W   | 0.792      | -            | -                | -                | 1 (0.792) |     2.77 | bobeksde, chawzyyy, draken, Lekr0, spooke |
|           26 |     1451 | 2024-06-13 | Kappa Bar       | W   | 0.784      | -            | -                | -                | 1 (0.784) |     0.63 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           25 |     1550 | 2024-06-09 | Alliance        | W   | 0.759      | -            | -                | -                | 1 (0.759) |     2.76 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           24 |     1589 | 2024-06-09 | Preasy          | W   | 0.757      | -            | -                | -                | 1 (0.757) |     0.62 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           23 |     1863 | 2024-06-04 | Enterprise      | L   | 0.724      | -            | -                | -                | -         |   -19.23 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           22 |     1882 | 2024-06-03 | brazylijski luz | W   | 0.719      | -            | -                | -                | -         |     2.06 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           21 |     1884 | 2024-06-03 | Zero Tenacity   | W   | 0.718      | 0.371        | 0.135 (0.036)    | 1.000 (0.266)    | -         |     8.10 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           20 |     1974 | 2024-05-31 | UNiTY           | L   | 0.697      | -            | -                | -                | -         |   -18.34 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           19 |     2079 | 2024-05-26 | Preasy          | W   | 0.664      | -            | -                | -                | -         |     1.53 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           18 |     2177 | 2024-05-22 | Permitta        | W   | 0.637      | 0.371        | -                | 0.957 (0.226)    | -         |     2.58 | bobeksde, draken, Lekr0, Ro1f, spooke     |
|           17 |     2490 | 2024-05-14 | kONO            | L   | 0.584      | -            | -                | -                | -         |   -16.31 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           16 |     2506 | 2024-05-13 | UNiTY           | W   | 0.579      | -            | -                | -                | -         |     2.94 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           15 |     2512 | 2024-05-13 | ECLOT           | W   | 0.577      | 0.333        | 0.078 (0.015)    | -                | -         |     8.21 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           14 |     2523 | 2024-05-12 | Verdant         | W   | 0.573      | -            | -                | -                | -         |     2.54 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           13 |     2536 | 2024-05-12 | Preasy          | L   | 0.570      | -            | -                | -                | -         |   -16.88 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           12 |     2552 | 2024-05-11 | Lilmix          | W   | 0.566      | -            | -                | -                | 1 (0.566) |     1.71 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           11 |     2566 | 2024-05-11 | Flying Angels   | W   | 0.564      | -            | -                | -                | 1 (0.564) |     0.31 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           10 |     2584 | 2024-05-10 | FAVBET          | W   | 0.557      | -            | -                | -                | -         |     1.31 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            9 |     3108 | 2024-04-18 | UNiTY           | W   | 0.411      | -            | -                | -                | -         |     2.11 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            8 |     3173 | 2024-04-16 | Viperio         | W   | 0.398      | -            | -                | -                | -         |     0.38 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            7 |     3419 | 2024-04-07 | Alliance        | W   | 0.339      | -            | -                | -                | -         |     0.97 | bobeksde, chawzyyy, draken, Lekr0, spooke |
|            6 |     3427 | 2024-04-07 | Metizport       | L   | 0.337      | -            | -                | -                | -         |    -9.60 | bobeksde, chawzyyy, draken, Lekr0, spooke |
|            5 |     3437 | 2024-04-06 | JANO            | W   | 0.332      | -            | -                | -                | -         |     0.38 | bobeksde, chawzyyy, draken, Lekr0, spooke |
|            4 |     4037 | 2024-03-09 | Alliance        | L   | 0.145      | -            | -                | -                | -         |    -4.16 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            3 |     4138 | 2024-03-05 | B8              | L   | 0.120      | -            | -                | -                | -         |    -2.86 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            2 |     4144 | 2024-03-05 | Insilio         | W   | 0.119      | -            | -                | -                | -         |     0.40 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            1 |     4151 | 2024-03-05 | Sashi           | W   | 0.119      | -            | -                | -                | -         |     1.17 | chawzyyy, draken, Lekr0, Ro1f, spooke     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($39,051.47)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.12) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-12 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-07-20 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-07-09 |      0.957 | $3,000.00      | $2,871.99       |
| 2024-06-27 |      0.877 | $5,000.00      | $4,386.90       |
| 2024-06-15 |      0.799 | $11,615.00     | $9,276.69       |
| 2024-06-09 |      0.759 | $7,224.00      | $5,485.13       |
| 2024-06-06 |      0.738 | $1,000.00      | $737.93         |
| 2024-05-13 |      0.577 | $6,000.00      | $3,464.04       |
| 2024-05-11 |      0.566 | $4,170.00      | $2,361.93       |
| 2024-04-18 |      0.411 | $6,000.00      | $2,466.87       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
