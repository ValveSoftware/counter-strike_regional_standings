### Roster Details<br />
Team Name: ex-Preasy<br />
Roster: Altekz, Kristou, refrezh, roeJ, TMB<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [72](../standings_global.md)<br />
Regional Rank: [51]( ../standings_europe.md)<br />
Final Rank Value:  989.0<br />
<br />
Final Rank Value (989.0) = Starting Rank Value (892.5) + Head To Head Adjustments (96.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.413[<sup>1</sup>](#table2)
- Bounty Collected: 0.377[<sup>2</sup>](#table1)
- Opponent Network: 0.137[<sup>2</sup>](#table1)
- LAN Wins: 0.043[<sup>2</sup>](#table1)

The average of these factors is 0.242<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 892.5
- 400 + ( ( 0.242 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 892.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           40 |     1884 | 2024-04-15 | Sashi             | L   | 0.775      | -            | -                | -                | -         |    -7.97 | Altekz, Kristou, refrezh, roeJ, TMB            |
|           39 |     1912 | 2024-04-13 | 3DMAX             | L   | 0.761      | -            | -                | -                | -         |    -5.62 | Altekz, Kristou, refrezh, roeJ, TMB            |
|           38 |     2064 | 2024-04-09 | kONO              | W   | 0.734      | 0.384        | 0.033 (0.009)    | 0.395 (0.111)    | 0 (0.000) |     6.78 | Altekz, Kristou, refrezh, roeJ, TMB            |
|           37 |     2117 | 2024-04-07 | Zero Tenacity     | W   | 0.721      | 0.358        | 0.153 (0.040)    | 1.000 (0.258)    | 0 (0.000) |    14.14 | Altekz, Kristou, refrezh, roeJ, TMB            |
|           36 |     2424 | 2024-03-22 | FORZE             | L   | 0.615      | -            | -                | -                | -         |    -8.35 | gokushima, r3salt, SELLTER, shalfey, tN1R      |
|           35 |     2503 | 2024-03-18 | Sampi             | W   | 0.587      | 0.371        | 0.045 (0.010)    | 0.837 (0.182)    | 0 (0.000) |     9.17 | fino, manguss, sAvana1, The eLiVe, ZEDKO       |
|           34 |     2543 | 2024-03-16 | Passion UA        | W   | 0.575      | 0.371        | 0.086 (0.018)    | 0.803 (0.171)    | 0 (0.000) |    10.32 | fear, jackasmo, jambo, s-chilla, zeRRoFIX      |
|           33 |     2599 | 2024-03-14 | Entropiq          | W   | 0.560      | -            | -                | -                | 0 (0.000) |     2.69 | Altekz, Kristou, refrezh, roeJ, TMB            |
|           32 |     2670 | 2024-03-11 | Metizport         | L   | 0.543      | -            | -                | -                | -         |    -7.41 | Altekz, dupreeh, refrezh, roeJ, TMB            |
|           31 |     2683 | 2024-03-11 | HEROIC            | L   | 0.542      | -            | -                | -                | -         |    -0.20 | Altekz, dupreeh, refrezh, roeJ, TMB            |
|           30 |     2686 | 2024-03-11 | Permitta          | W   | 0.541      | 0.371        | 0.039 (0.008)    | 0.885 (0.177)    | 0 (0.000) |     8.94 | Altekz, dupreeh, refrezh, roeJ, TMB            |
|           29 |     2736 | 2024-03-09 | Fraud5            | W   | 0.527      | -            | -                | -                | 0 (0.000) |     3.18 | Rezst, shyyne, SLY, Tree60, yz0                |
|           28 |     2779 | 2024-03-07 | Secret            | W   | 0.514      | -            | -                | -                | 0 (0.000) |     1.71 | anarkez, innocent, Kind0, Maze, Tauson         |
|           27 |     2872 | 2024-03-03 | Gaimin Gladiators | W   | 0.490      | -            | -                | -                | 0 (0.000) |    12.64 | kraghen, Nodios, Patti, Queenix, salazar       |
|           26 |     2881 | 2024-03-03 | BetBoom           | W   | 0.489      | 0.143        | 0.414 (0.029)    | 0.798 (0.056)    | -         |    15.07 | danistzz, KaiR0N-, nafany, s1ren, zorte        |
|           25 |     2888 | 2024-03-03 | kONO              | W   | 0.489      | -            | -                | -                | -         |     5.80 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy |
|           24 |     2894 | 2024-03-03 | fnatic            | L   | 0.488      | -            | -                | -                | -         |    -0.54 | Altekz, dupreeh, refrezh, roeJ, TMB            |
|           23 |     2897 | 2024-03-03 | MOUZ NXT          | L   | 0.487      | -            | -                | -                | -         |    -4.13 | Burmylov, Chr1zN, Neityu, PR, sirah            |
|           22 |     2925 | 2024-03-01 | BetBoom           | L   | 0.476      | -            | -                | -                | -         |    -0.32 | Altekz, dupreeh, refrezh, roeJ, TMB            |
|           21 |     2947 | 2024-02-28 | fnatic            | W   | 0.463      | 0.500        | 0.290 (0.067)    | 0.666 (0.154)    | -         |    14.13 | Altekz, dupreeh, refrezh, roeJ, TMB            |
|           20 |     3101 | 2024-02-21 | ex-Guild Eagles   | L   | 0.416      | -            | -                | -                | -         |    -6.31 | Altekz, dupreeh, refrezh, roeJ, TMB            |
|           19 |     3132 | 2024-02-20 | PERA              | W   | 0.409      | -            | -                | -                | 1 (0.409) |     7.52 | Altekz, dupreeh, refrezh, roeJ, TMB            |
|           18 |     3158 | 2024-02-19 | OG                | L   | 0.402      | -            | -                | -                | -         |    -2.35 | F1KU, HeavyGod, k1to, Nexius, regali           |
|           17 |     3161 | 2024-02-19 | HEROIC            | L   | 0.402      | -            | -                | -                | -         |    -0.10 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS         |
|           16 |     3381 | 2024-02-09 | Gaimin Gladiators | W   | 0.335      | 0.371        | 0.076 (0.009)    | 0.632 (0.078)    | -         |     8.76 | Altekz, dupreeh, refrezh, roeJ, TMB            |
|           15 |     3397 | 2024-02-08 | TSM               | W   | 0.327      | -            | -                | -                | -         |     2.95 | joel, KWERTZZ, MoDo, valde, Zyphon             |
|           14 |     3403 | 2024-02-07 | Into the Breach   | W   | 0.320      | -            | -                | -                | -         |     2.64 | Bymas, CRUC1AL, misutaaa, rallen, Thomas       |
|           13 |     3412 | 2024-02-06 | Sangal            | W   | 0.314      | 0.371        | 0.216 (0.025)    | 0.884 (0.103)    | -         |     8.02 | Altekz, dupreeh, refrezh, roeJ, TMB            |
|           12 |     3423 | 2024-02-05 | Gaimin Gladiators | L   | 0.307      | -            | -                | -                | -         |    -1.53 | kraghen, Nodios, Patti, Queenix, salazar       |
|           11 |     3489 | 2024-02-02 | Metizport         | L   | 0.289      | -            | -                | -                | -         |    -3.62 | adamb, Jackinho, nilo, susp, ztr               |
|           10 |     3507 | 2024-02-02 | SINNERS           | W   | 0.287      | 0.371        | -                | 0.782 (0.083)    | -         |     7.00 | Altekz, dupreeh, refrezh, roeJ, TMB            |
|            9 |     3551 | 2024-01-31 | ex-Sprout         | W   | 0.274      | -            | -                | -                | -         |     1.25 | Anlelele, cej0t, raalz, Sdaim, sL1m3           |
|            8 |     3575 | 2024-01-30 | Entropiq          | W   | 0.267      | -            | -                | -                | -         |     1.40 | c0llins, Marix, mwlky, oxygeN, tiziaN          |
|            7 |     3627 | 2024-01-26 | ex-Sprout         | L   | 0.240      | -            | -                | -                | -         |    -6.60 | Anlelele, cej0t, raalz, Sdaim, sL1m3           |
|            6 |     3729 | 2024-01-21 | 3DMAX             | W   | 0.208      | 0.143        | 0.186 (0.006)    | -                | -         |     5.75 | Altekz, dupreeh, refrezh, roeJ, TMB            |
|            5 |     3753 | 2024-01-20 | MOUZ              | L   | 0.203      | -            | -                | -                | -         |    -0.01 | Altekz, dupreeh, refrezh, roeJ, TMB            |
|            4 |     3769 | 2024-01-20 | FORZE             | W   | 0.202      | -            | -                | -                | -         |     0.76 | gokushima, kelieN, r3salt, shalfey, tN1R       |
|            3 |     3822 | 2024-01-19 | Spirit            | L   | 0.195      | -            | -                | -                | -         |    -0.01 | chopper, donk, magixx, sh1ro, zont1x           |
|            2 |     3880 | 2024-01-18 | Astralis          | L   | 0.189      | -            | -                | -                | -         |    -0.02 | Altekz, dupreeh, refrezh, roeJ, TMB            |
|            1 |     3885 | 2024-01-18 | Entropiq          | W   | 0.189      | -            | -                | -                | -         |     0.99 | c0llins, Marix, mwlky, oxygeN, tiziaN          |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,369.27)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      0.768 | $1,600.00      | $1,229.38       |
| 2024-03-18 |      0.587 | $11,000.00     | $6,460.01       |
| 2024-02-09 |      0.335 | $11,000.00     | $3,679.87       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
