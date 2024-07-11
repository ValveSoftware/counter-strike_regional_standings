### Roster Details<br />
Team Name: BESTIA<br />
Roster: luchov, naz, Noktse, tomaszin, zock<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [64](../standings_global.md)<br />
Regional Rank: [16]( ../standings_americas.md)<br />
Final Rank Value:  1035.9<br />
<br />
Final Rank Value (1035.9) = Starting Rank Value (1016.0) + Head To Head Adjustments (19.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.434[<sup>1</sup>](#table2)
- Bounty Collected: 0.487[<sup>2</sup>](#table1)
- Opponent Network: 0.246[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.292<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1016.0
- 400 + ( ( 0.292 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1016.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           85 |       12 | 2024-07-10 | Sharks         | L   | 1.000      | -            | -                | -                | -         |   -16.83 | luchov, naz, Noktse, tomaszin, zock    |
|           84 |       38 | 2024-07-09 | SPORT          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.45 | luchov, naz, Noktse, tomaszin, zock    |
|           83 |       55 | 2024-07-08 | Intense        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.60 | luchov, naz, Noktse, tomaszin, zock    |
|           82 |       62 | 2024-07-08 | Bounty Hunters | L   | 1.000      | -            | -                | -                | -         |   -20.04 | luchov, naz, Noktse, tomaszin, zock    |
|           81 |      195 | 2024-06-15 | 9z             | L   | 1.000      | -            | -                | -                | -         |    -1.83 | luchov, meyern, naz, Noktse, tomaszin  |
|           80 |      226 | 2024-06-14 | paiN           | L   | 1.000      | -            | -                | -                | -         |    -2.80 | luchov, meyern, naz, Noktse, tomaszin  |
|           79 |      325 | 2024-06-10 | paiN           | L   | 0.995      | -            | -                | -                | -         |    -2.88 | luchov, meyern, naz, Noktse, tomaszin  |
|           78 |      327 | 2024-06-10 | Bounty Hunters | W   | 0.994      | -            | -                | -                | 0 (0.000) |     9.95 | luchov, meyern, naz, Noktse, tomaszin  |
|           77 |      359 | 2024-06-09 | RED Canids     | W   | 0.989      | 0.371        | 0.115 (0.042)    | 0.698 (0.256)    | 0 (0.000) |    23.07 | luchov, meyern, naz, Noktse, tomaszin  |
|           76 |      382 | 2024-06-09 | Sharks         | L   | 0.986      | -            | -                | -                | -         |   -14.28 | luchov, meyern, naz, Noktse, tomaszin  |
|           75 |      426 | 2024-06-08 | Solid          | W   | 0.981      | 0.371        | 0.048 (0.018)    | -                | 0 (0.000) |     8.74 | luchov, meyern, naz, Noktse, tomaszin  |
|           74 |      445 | 2024-06-08 | Vikings KR     | L   | 0.980      | -            | -                | -                | -         |   -25.53 | luchov, meyern, naz, Noktse, tomaszin  |
|           73 |      486 | 2024-06-07 | ODDIK          | W   | 0.974      | 0.450        | 0.042 (0.018)    | 0.602 (0.264)    | 0 (0.000) |     9.42 | luchov, meyern, naz, Noktse, tomaszin  |
|           72 |      546 | 2024-06-06 | inSanitY       | L   | 0.968      | -            | -                | -                | -         |   -18.65 | luchov, meyern, naz, Noktse, tomaszin  |
|           71 |      609 | 2024-06-05 | MIBR           | L   | 0.962      | -            | -                | -                | -         |    -1.67 | luchov, meyern, naz, Noktse, tomaszin  |
|           70 |      659 | 2024-06-04 | Sharks         | L   | 0.955      | -            | -                | -                | -         |   -16.56 | luchov, meyern, naz, Noktse, tomaszin  |
|           69 |      975 | 2024-05-22 | Case           | W   | 0.868      | 0.450        | -                | 0.582 (0.227)    | 0 (0.000) |     7.34 | luchov, meyern, naz, Noktse, tomaszin  |
|           68 |      979 | 2024-05-22 | Case           | W   | 0.868      | 0.450        | -                | 0.582 (0.227)    | 0 (0.000) |     7.80 | luchov, meyern, naz, Noktse, tomaszin  |
|           67 |      985 | 2024-05-22 | Fluxo          | W   | 0.867      | 0.450        | 0.166 (0.065)    | 0.615 (0.240)    | 0 (0.000) |    15.72 | luchov, meyern, naz, Noktse, tomaszin  |
|           66 |      986 | 2024-05-22 | Fluxo          | W   | 0.867      | 0.450        | 0.166 (0.065)    | 0.615 (0.240)    | 0 (0.000) |    16.92 | luchov, meyern, naz, Noktse, tomaszin  |
|           65 |     1020 | 2024-05-21 | ex-2GAME       | W   | 0.861      | -            | -                | -                | -         |     3.38 | luchov, meyern, naz, Noktse, tomaszin  |
|           64 |     1023 | 2024-05-21 | ex-2GAME       | W   | 0.861      | -            | -                | -                | -         |     3.49 | luchov, meyern, naz, Noktse, tomaszin  |
|           63 |     1029 | 2024-05-21 | Imperial       | W   | 0.861      | 0.450        | 0.390 (0.151)    | 0.646 (0.250)    | -         |    24.68 | luchov, meyern, naz, Noktse, tomaszin  |
|           62 |     1031 | 2024-05-21 | Imperial       | W   | 0.861      | 0.450        | 0.390 (0.151)    | 0.646 (0.250)    | -         |    25.23 | luchov, meyern, naz, Noktse, tomaszin  |
|           61 |     1059 | 2024-05-20 | Corinthians    | W   | 0.855      | -            | -                | -                | -         |     1.68 | luchov, meyern, naz, Noktse, tomaszin  |
|           60 |     1064 | 2024-05-20 | 9z             | W   | 0.854      | 0.450        | 0.586 (0.225)    | 0.749 (0.288)    | -         |    26.07 | luchov, meyern, naz, Noktse, tomaszin  |
|           59 |     1066 | 2024-05-20 | 9z             | L   | 0.854      | -            | -                | -                | -         |    -0.75 | luchov, meyern, naz, Noktse, tomaszin  |
|           58 |     1146 | 2024-05-17 | Solid          | L   | 0.835      | -            | -                | -                | -         |   -16.09 | luchov, meyern, naz, Noktse, tomaszin  |
|           57 |     1148 | 2024-05-17 | Solid          | W   | 0.835      | 0.450        | 0.048 (0.018)    | -                | -         |    10.15 | luchov, meyern, naz, Noktse, tomaszin  |
|           56 |     1232 | 2024-05-15 | ODDIK          | W   | 0.821      | 0.450        | -                | 0.602 (0.223)    | -         |    12.37 | luchov, meyern, naz, Noktse, tomaszin  |
|           55 |     1234 | 2024-05-15 | ODDIK          | W   | 0.821      | -            | -                | -                | -         |    13.31 | luchov, meyern, naz, Noktse, tomaszin  |
|           54 |     1243 | 2024-05-15 | Hype           | L   | 0.820      | -            | -                | -                | -         |   -17.04 | luchov, meyern, naz, Noktse, tomaszin  |
|           53 |     1291 | 2024-05-14 | Imperial       | L   | 0.815      | -            | -                | -                | -         |    -1.56 | luchov, meyern, naz, Noktse, tomaszin  |
|           52 |     1304 | 2024-05-14 | RED Canids     | L   | 0.813      | -            | -                | -                | -         |    -6.61 | luchov, meyern, naz, Noktse, tomaszin  |
|           51 |     1344 | 2024-05-12 | Solid          | W   | 0.801      | -            | -                | -                | -         |    10.46 | luchov, meyern, naz, Noktse, tomaszin  |
|           50 |     1351 | 2024-05-12 | O PLANO        | W   | 0.800      | -            | -                | -                | -         |     2.17 | luchov, meyern, naz, Noktse, tomaszin  |
|           49 |     1375 | 2024-05-11 | paiN           | L   | 0.794      | -            | -                | -                | -         |    -1.02 | luchov, meyern, naz, Noktse, tomaszin  |
|           48 |     1401 | 2024-05-10 | Imperial       | W   | 0.787      | 0.435        | 0.390 (0.133)    | -                | -         |    23.52 | luchov, meyern, naz, Noktse, tomaszin  |
|           47 |     1417 | 2024-05-09 | Sharks         | W   | 0.782      | -            | -                | -                | -         |    14.82 | luchov, meyern, naz, Noktse, tomaszin  |
|           46 |     1446 | 2024-05-08 | Vikings KR     | W   | 0.774      | -            | -                | -                | -         |     8.56 | luchov, meyern, naz, Noktse, tomaszin  |
|           45 |     1478 | 2024-05-06 | Sharks         | L   | 0.762      | -            | -                | -                | -         |    -9.26 | luchov, meyern, naz, Noktse, tomaszin  |
|           44 |     1716 | 2024-04-25 | RED Canids     | L   | 0.688      | -            | -                | -                | -         |    -4.41 | luchov, meyern, naz, Noktse, tomaszin  |
|           43 |     1718 | 2024-04-25 | RED Canids     | L   | 0.688      | -            | -                | -                | -         |    -4.59 | luchov, meyern, naz, Noktse, tomaszin  |
|           42 |     1983 | 2024-04-16 | O PLANO        | L   | 0.629      | -            | -                | -                | -         |   -18.05 | luchov, meyern, naz, Noktse, tomaszin  |
|           41 |     2080 | 2024-04-11 | Galorys        | L   | 0.594      | -            | -                | -                | -         |   -11.20 | luchov, meyern, naz, Noktse, tomaszin  |
|           40 |     2162 | 2024-04-09 | Galorys        | L   | 0.582      | -            | -                | -                | -         |   -11.51 | luchov, meyern, naz, Noktse, tomaszin  |
|           39 |     2167 | 2024-04-09 | Galorys        | W   | 0.581      | -            | -                | -                | -         |     6.88 | luchov, meyern, naz, Noktse, tomaszin  |
|           38 |     2203 | 2024-04-08 | RED Canids     | L   | 0.575      | -            | -                | -                | -         |    -4.68 | luchov, meyern, naz, Noktse, tomaszin  |
|           37 |     2246 | 2024-04-07 | Sharks         | L   | 0.566      | -            | -                | -                | -         |   -13.32 | luchov, meyern, naz, Noktse, tomaszin  |
|           36 |     2253 | 2024-04-06 | Fluxo          | W   | 0.562      | -            | -                | -                | -         |    11.66 | luchov, meyern, naz, Noktse, tomaszin  |
|           35 |     2292 | 2024-04-04 | adalYamigos    | L   | 0.549      | -            | -                | -                | -         |   -14.76 | luchov, meyern, naz, Noktse, tomaszin  |
|           34 |     2296 | 2024-04-04 | adalYamigos    | W   | 0.548      | -            | -                | -                | -         |     2.47 | luchov, meyern, naz, Noktse, tomaszin  |
|           33 |     2308 | 2024-04-04 | Imperial       | L   | 0.547      | -            | -                | -                | -         |    -0.94 | luchov, meyern, naz, Noktse, tomaszin  |
|           32 |     2345 | 2024-04-03 | Fluxo          | L   | 0.541      | -            | -                | -                | -         |    -6.46 | luchov, meyern, naz, Noktse, tomaszin  |
|           31 |     2381 | 2024-04-02 | Sharks         | W   | 0.535      | -            | -                | -                | -         |     3.88 | luchov, meyern, naz, Noktse, tomaszin  |
|           30 |     2386 | 2024-04-02 | Fluxo          | L   | 0.534      | -            | -                | -                | -         |    -6.56 | luchov, meyern, naz, Noktse, tomaszin  |
|           29 |     2474 | 2024-03-27 | W7M            | L   | 0.495      | -            | -                | -                | -         |   -11.98 | luchov, meyern, naz, Noktse, tomaszin  |
|           28 |     2479 | 2024-03-27 | W7M            | W   | 0.495      | -            | -                | -                | -         |     3.60 | luchov, meyern, naz, Noktse, tomaszin  |
|           27 |     2789 | 2024-03-12 | RED Canids     | L   | 0.394      | -            | -                | -                | -         |    -3.64 | deco, luchov, meyern, Noktse, tomaszin |
|           26 |     2799 | 2024-03-11 | FURIA Academy  | W   | 0.389      | -            | -                | -                | -         |     0.83 | deco, luchov, meyern, Noktse, tomaszin |
|           25 |     2822 | 2024-03-10 | adalYamigos    | L   | 0.382      | -            | -                | -                | -         |   -10.58 | deco, luchov, meyern, Noktse, tomaszin |
|           24 |     2870 | 2024-03-08 | FURIA Academy  | W   | 0.368      | -            | -                | -                | -         |     0.73 | deco, luchov, meyern, Noktse, tomaszin |
|           23 |     3035 | 2024-03-02 | Wildcard       | L   | 0.327      | -            | -                | -                | -         |    -6.00 | deco, luchov, meyern, Noktse, tomaszin |
|           22 |     3052 | 2024-03-01 | Liquid         | L   | 0.321      | -            | -                | -                | -         |    -0.38 | deco, luchov, meyern, Noktse, tomaszin |
|           21 |     3176 | 2024-02-24 | Imperial       | L   | 0.280      | -            | -                | -                | -         |    -0.58 | deco, luchov, meyern, Noktse, tomaszin |
|           20 |     3195 | 2024-02-23 | 9z             | L   | 0.274      | -            | -                | -                | -         |    -0.18 | deco, luchov, meyern, Noktse, tomaszin |
|           19 |     3203 | 2024-02-22 | Imperial       | W   | 0.269      | -            | -                | -                | -         |     7.95 | deco, luchov, meyern, Noktse, tomaszin |
|           18 |     3212 | 2024-02-22 | 9z             | L   | 0.268      | -            | -                | -                | -         |    -0.16 | deco, luchov, meyern, Noktse, tomaszin |
|           17 |     3237 | 2024-02-21 | W7M            | W   | 0.260      | -            | -                | -                | -         |     1.96 | deco, luchov, meyern, Noktse, tomaszin |
|           16 |     3312 | 2024-02-18 | FURIA Academy  | W   | 0.240      | -            | -                | -                | -         |     0.49 | deco, luchov, meyern, Noktse, tomaszin |
|           15 |     3352 | 2024-02-16 | Case           | L   | 0.228      | -            | -                | -                | -         |    -4.72 | deco, luchov, meyern, Noktse, tomaszin |
|           14 |     3474 | 2024-02-12 | FURIA Academy  | W   | 0.202      | -            | -                | -                | -         |     0.39 | deco, luchov, meyern, Noktse, tomaszin |
|           13 |     3609 | 2024-02-02 | Imperial       | L   | 0.136      | -            | -                | -                | -         |    -0.27 | deco, luchov, meyern, Noktse, tomaszin |
|           12 |     3611 | 2024-02-02 | ODDIK          | W   | 0.135      | -            | -                | -                | -         |     1.83 | deco, luchov, meyern, Noktse, tomaszin |
|           11 |     3615 | 2024-02-02 | Imperial       | L   | 0.135      | -            | -                | -                | -         |    -0.27 | deco, luchov, meyern, Noktse, tomaszin |
|           10 |     3799 | 2024-01-23 | Imperial       | L   | 0.068      | -            | -                | -                | -         |    -0.14 | deco, luchov, meyern, Noktse, tomaszin |
|            9 |     3817 | 2024-01-22 | AJF            | W   | 0.062      | -            | -                | -                | -         |     0.06 | deco, luchov, meyern, Noktse, tomaszin |
|            8 |     3852 | 2024-01-21 | W7M            | W   | 0.055      | -            | -                | -                | -         |     0.39 | deco, luchov, meyern, Noktse, tomaszin |
|            7 |     3885 | 2024-01-20 | MIBR           | L   | 0.048      | -            | -                | -                | -         |    -0.06 | deco, luchov, meyern, Noktse, tomaszin |
|            6 |     3935 | 2024-01-19 | Imperial       | W   | 0.042      | -            | -                | -                | -         |     1.24 | deco, luchov, meyern, Noktse, tomaszin |
|            5 |     3939 | 2024-01-19 | Flamengo       | W   | 0.041      | -            | -                | -                | -         |     0.07 | deco, luchov, meyern, Noktse, tomaszin |
|            4 |     4145 | 2024-01-15 | TIMACETA       | L   | 0.015      | -            | -                | -                | -         |    -0.46 | deco, luchov, meyern, Noktse, tomaszin |
|            3 |     4175 | 2024-01-14 | Sharks         | L   | 0.008      | -            | -                | -                | -         |    -0.14 | deco, luchov, meyern, Noktse, tomaszin |
|            2 |     4180 | 2024-01-14 | W7M            | W   | 0.008      | -            | -                | -                | -         |     0.06 | deco, luchov, meyern, Noktse, tomaszin |
|            1 |     4203 | 2024-01-13 | Intense        | W   | 0.002      | -            | -                | -                | -         |     0.00 | deco, luchov, meyern, Noktse, tomaszin |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,901.85)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $1,500.00      | $1,500.00       |
| 2024-06-10 |      0.995 | $4,000.00      | $3,980.71       |
| 2024-06-09 |      0.988 | $2,000.00      | $1,976.12       |
| 2024-05-12 |      0.801 | $5,000.00      | $4,006.59       |
| 2024-02-25 |      0.288 | $5,000.00      | $1,438.43       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
