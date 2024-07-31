### Roster Details<br />
Team Name: Metizport<br />
Roster: adamb, Jackinho, nilo, Plopski, Sapec<br />
Global Rank: [85](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [62]( ../standings_europe.md)<br />
<br />
Final Rank Value:  922.3<br />
<br />
Final Rank Value (922.3) = Starting Rank Value (908.1) + Head To Head Adjustments (14.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.415[<sup>1</sup>](#table2)
- Bounty Collected: 0.386[<sup>2</sup>](#table1)
- Opponent Network: 0.184[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.246<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 908.1
- 400 + ( ( 0.246 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 908.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           66 |       69 | 2024-07-30 | QUAZAR            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.60 | adamb, Jackinho, nilo, Plopski, Sapec |
|           65 |      124 | 2024-07-28 | Insilio           | L   | 1.000      | -            | -                | -                | -         |   -14.28 | adamb, Jackinho, nilo, Plopski, Sapec |
|           64 |      290 | 2024-07-23 | RUBY              | L   | 1.000      | -            | -                | -                | -         |   -17.44 | adamb, Jackinho, nilo, Plopski, Sapec |
|           63 |      308 | 2024-07-22 | Permitta          | L   | 1.000      | -            | -                | -                | -         |   -16.97 | adamb, Jackinho, nilo, Plopski, Sapec |
|           62 |      409 | 2024-07-19 | Sampi             | W   | 1.000      | 0.435        | 0.028 (0.012)    | 1.000 (0.435)    | 0 (0.000) |    12.61 | adamb, Jackinho, nilo, Plopski, Sapec |
|           61 |      465 | 2024-07-18 | BC.Game           | L   | 1.000      | -            | -                | -                | -         |   -26.53 | adamb, Jackinho, nilo, Plopski, Sapec |
|           60 |      588 | 2024-07-16 | Endpoint          | W   | 1.000      | 0.435        | 0.012 (0.005)    | 0.523 (0.227)    | 0 (0.000) |    11.47 | adamb, Jackinho, nilo, Plopski, Sapec |
|           59 |     1652 | 2024-05-23 | Space             | L   | 0.737      | -            | -                | -                | -         |   -15.04 | abdi, adamb, Jackinho, nilo, Plopski  |
|           58 |     1757 | 2024-05-20 | Zero Tenacity     | L   | 0.720      | -            | -                | -                | -         |    -8.47 | adamb, Jackinho, nilo, Plopski, ztr   |
|           57 |     1811 | 2024-05-18 | Ninjas in Pyjamas | W   | 0.706      | 0.500        | 0.227 (0.080)    | 0.477 (0.168)    | 0 (0.000) |    21.34 | adamb, Jackinho, nilo, Plopski, ztr   |
|           56 |     1898 | 2024-05-16 | Rare Atom         | W   | 0.691      | 0.500        | -                | 0.397 (0.137)    | 0 (0.000) |     3.31 | adamb, Jackinho, nilo, Plopski, ztr   |
|           55 |     2082 | 2024-05-11 | BetBoom           | L   | 0.658      | -            | -                | -                | -         |    -1.72 | adamb, Jackinho, nilo, Plopski, ztr   |
|           54 |     2097 | 2024-05-10 | EYEBALLERS        | W   | 0.652      | 0.435        | -                | 0.513 (0.146)    | 0 (0.000) |     8.91 | adamb, Jackinho, nilo, Plopski, ztr   |
|           53 |     2222 | 2024-05-04 | AMKAL             | L   | 0.611      | -            | -                | -                | -         |    -4.70 | adamb, Jackinho, nilo, susp, ztr      |
|           52 |     2237 | 2024-05-03 | Zero Tenacity     | W   | 0.604      | 0.435        | 0.139 (0.036)    | 1.000 (0.263)    | 0 (0.000) |    12.33 | adamb, Jackinho, nilo, susp, ztr      |
|           51 |     2257 | 2024-05-02 | Sangal            | W   | 0.599      | 0.435        | 0.221 (0.058)    | 0.824 (0.214)    | 0 (0.000) |    13.58 | adamb, Jackinho, nilo, susp, ztr      |
|           50 |     2415 | 2024-04-25 | Nexus             | L   | 0.553      | -            | -                | -                | -         |   -11.43 | adamb, Jackinho, nilo, susp, ztr      |
|           49 |     2459 | 2024-04-23 | Alliance          | W   | 0.538      | 0.384        | -                | 0.273 (0.056)    | 0 (0.000) |     6.67 | adamb, Jackinho, nilo, p1ke, susp     |
|           48 |     2564 | 2024-04-19 | FURIA             | L   | 0.513      | -            | -                | -                | -         |    -0.24 | adamb, Jackinho, Plopski, susp, ztr   |
|           47 |     2602 | 2024-04-18 | Imperial          | L   | 0.506      | -            | -                | -                | -         |    -1.83 | adamb, Jackinho, Plopski, susp, ztr   |
|           46 |     2884 | 2024-04-09 | ex-Guild Eagles   | L   | 0.445      | -            | -                | -                | -         |    -9.50 | adamb, Jackinho, nilo, susp, ztr      |
|           45 |     2900 | 2024-04-08 | Aurora            | L   | 0.440      | -            | -                | -                | -         |    -0.25 | adamb, Jackinho, nilo, susp, ztr      |
|           44 |     2912 | 2024-04-08 | 9 Pandas          | L   | 0.438      | -            | -                | -                | -         |    -5.89 | adamb, Jackinho, nilo, susp, ztr      |
|           43 |     2937 | 2024-04-07 | EYEBALLERS        | W   | 0.433      | 0.330        | -                | 0.513 (0.073)    | 0 (0.000) |     5.83 | adamb, Jackinho, nilo, susp, ztr      |
|           42 |     2946 | 2024-04-07 | Johnny Speeds     | W   | 0.431      | 0.330        | 0.124 (0.018)    | 0.817 (0.116)    | -         |    11.86 | adamb, Jackinho, nilo, susp, ztr      |
|           41 |     2962 | 2024-04-06 | Young Gods        | W   | 0.424      | -            | -                | -                | -         |     3.05 | adamb, Jackinho, nilo, susp, ztr      |
|           40 |     3014 | 2024-04-04 | Ninjas in Pyjamas | L   | 0.412      | -            | -                | -                | -         |    -0.27 | adamb, Jackinho, nilo, susp, ztr      |
|           39 |     3040 | 2024-04-03 | Monte             | W   | 0.407      | -            | -                | -                | -         |     7.74 | adamb, Jackinho, nilo, susp, ztr      |
|           38 |     3053 | 2024-04-03 | FAVBET            | W   | 0.405      | -            | -                | -                | -         |     4.04 | adamb, Jackinho, nilo, susp, ztr      |
|           37 |     3087 | 2024-04-02 | B8                | W   | 0.399      | 0.143        | 0.168 (0.010)    | -                | -         |     9.05 | adamb, Jackinho, nilo, susp, ztr      |
|           36 |     3093 | 2024-04-02 | Aurora            | L   | 0.398      | -            | -                | -                | -         |    -0.19 | adamb, Jackinho, nilo, susp, ztr      |
|           35 |     3109 | 2024-04-01 | PARIVISION        | L   | 0.392      | -            | -                | -                | -         |    -3.29 | adamb, Jackinho, nilo, susp, ztr      |
|           34 |     3176 | 2024-03-27 | Aurora            | L   | 0.360      | -            | -                | -                | -         |    -0.16 | adamb, Jackinho, nilo, susp, ztr      |
|           33 |     3182 | 2024-03-27 | NAVI Junior       | W   | 0.360      | -            | -                | -                | -         |     2.47 | adamb, Jackinho, nilo, susp, ztr      |
|           32 |     3385 | 2024-03-15 | kONO              | L   | 0.279      | -            | -                | -                | -         |    -5.83 | adamb, Jackinho, nilo, susp, ztr      |
|           31 |     3422 | 2024-03-14 | ALTERNATE aTTaX   | L   | 0.272      | -            | -                | -                | -         |    -3.69 | adamb, Jackinho, nilo, susp, ztr      |
|           30 |     3456 | 2024-03-13 | HEROIC            | L   | 0.265      | -            | -                | -                | -         |    -0.22 | adamb, Jackinho, nilo, susp, ztr      |
|           29 |     3479 | 2024-03-12 | B8                | W   | 0.260      | 0.143        | 0.168 (0.006)    | -                | -         |     5.99 | adamb, Jackinho, nilo, susp, ztr      |
|           28 |     3487 | 2024-03-12 | Apeks             | W   | 0.259      | -            | -                | -                | -         |     4.20 | adamb, Jackinho, nilo, susp, ztr      |
|           27 |     3497 | 2024-03-11 | ex-Preasy         | W   | 0.254      | -            | -                | -                | -         |     2.88 | adamb, Jackinho, nilo, susp, ztr      |
|           26 |     3511 | 2024-03-11 | ENCE              | L   | 0.252      | -            | -                | -                | -         |    -0.31 | adamb, Jackinho, nilo, susp, ztr      |
|           25 |     3519 | 2024-03-10 | Spirit            | L   | 0.247      | -            | -                | -                | -         |    -0.03 | adamb, Jackinho, nilo, susp, ztr      |
|           24 |     3546 | 2024-03-09 | Monte             | W   | 0.239      | 0.535        | 0.062 (0.008)    | -                | -         |     4.82 | adamb, Jackinho, nilo, susp, ztr      |
|           23 |     3553 | 2024-03-09 | EYEBALLERS        | L   | 0.238      | -            | -                | -                | -         |    -3.85 | adamb, Jackinho, nilo, susp, ztr      |
|           22 |     3559 | 2024-03-09 | Lemondogs         | W   | 0.238      | -            | -                | -                | -         |     0.39 | adamb, Jackinho, nilo, susp, ztr      |
|           21 |     3577 | 2024-03-08 | Secret            | W   | 0.232      | -            | -                | -                | -         |     0.78 | adamb, Jackinho, nilo, susp, ztr      |
|           20 |     3618 | 2024-03-06 | Falcons           | W   | 0.220      | 0.535        | 0.208 (0.024)    | -                | -         |     6.61 | adamb, Jackinho, nilo, susp, ztr      |
|           19 |     3698 | 2024-03-03 | The Chosen Few    | W   | 0.200      | -            | -                | -                | -         |     1.36 | adamb, Jackinho, nilo, susp, ztr      |
|           18 |     3707 | 2024-03-03 | ILIN              | W   | 0.199      | -            | -                | -                | -         |     0.35 | adamb, Jackinho, nilo, susp, ztr      |
|           17 |     3711 | 2024-03-03 | RUSH B            | W   | 0.199      | -            | -                | -                | -         |     2.58 | adamb, Jackinho, nilo, susp, ztr      |
|           16 |     3720 | 2024-03-03 | ECLOT             | L   | 0.199      | -            | -                | -                | -         |    -1.50 | adamb, Jackinho, nilo, susp, ztr      |
|           15 |     3766 | 2024-02-29 | Endpoint          | W   | 0.179      | -            | -                | -                | -         |     2.72 | adamb, Jackinho, nilo, susp, ztr      |
|           14 |     3803 | 2024-02-27 | ex-Guild Eagles   | L   | 0.166      | -            | -                | -                | -         |    -3.19 | adamb, Jackinho, nilo, susp, ztr      |
|           13 |     4175 | 2024-02-11 | Apeks             | W   | 0.060      | -            | -                | -                | -         |     0.99 | adamb, Jackinho, nilo, susp, ztr      |
|           12 |     4180 | 2024-02-11 | ex-Sprout         | W   | 0.059      | -            | -                | -                | -         |     0.19 | adamb, Jackinho, nilo, susp, ztr      |
|           11 |     4188 | 2024-02-10 | FURIA             | W   | 0.052      | -            | -                | -                | -         |     1.64 | adamb, Jackinho, nilo, susp, ztr      |
|           10 |     4191 | 2024-02-10 | Apeks             | L   | 0.052      | -            | -                | -                | -         |    -0.78 | adamb, Jackinho, nilo, susp, ztr      |
|            9 |     4192 | 2024-02-10 | FURIA             | W   | 0.051      | -            | -                | -                | -         |     1.61 | adamb, Jackinho, nilo, susp, ztr      |
|            8 |     4227 | 2024-02-07 | ex-Sprout         | W   | 0.032      | -            | -                | -                | -         |     0.10 | adamb, Jackinho, nilo, susp, ztr      |
|            7 |     4235 | 2024-02-06 | Into the Breach   | L   | 0.026      | -            | -                | -                | -         |    -0.68 | adamb, Jackinho, nilo, susp, ztr      |
|            6 |     4248 | 2024-02-05 | TSM               | L   | 0.018      | -            | -                | -                | -         |    -0.45 | adamb, Jackinho, nilo, susp, ztr      |
|            5 |     4255 | 2024-02-04 | 500               | L   | 0.014      | -            | -                | -                | -         |    -0.32 | adamb, Jackinho, nilo, susp, ztr      |
|            4 |     4261 | 2024-02-04 | TMVG              | W   | 0.013      | -            | -                | -                | -         |     0.04 | adamb, Jackinho, nilo, susp, ztr      |
|            3 |     4272 | 2024-02-04 | DUSTY             | W   | 0.011      | -            | -                | -                | -         |     0.07 | adamb, Jackinho, nilo, susp, ztr      |
|            2 |     4302 | 2024-02-03 | Sangal            | W   | 0.004      | -            | -                | -                | -         |     0.10 | adamb, Jackinho, nilo, susp, ztr      |
|            1 |     4314 | 2024-02-02 | EYEBALLERS        | W   | 0.000      | -            | -                | -                | -         |     0.00 | adamb, Jackinho, nilo, susp, ztr      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,727.33)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-12 |      0.666 | $2,000.00      | $1,332.34       |
| 2024-05-04 |      0.612 | $5,000.00      | $3,062.21       |
| 2024-04-20 |      0.521 | $5,000.00      | $2,603.39       |
| 2024-04-07 |      0.433 | $6,110.00      | $2,643.53       |
| 2024-03-10 |      0.247 | $12,500.00     | $3,085.86       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
