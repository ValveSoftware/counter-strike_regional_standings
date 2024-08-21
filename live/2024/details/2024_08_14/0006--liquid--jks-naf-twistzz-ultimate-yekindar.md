### Roster Details<br />
Team Name: Liquid<br />
Roster: jks, NAF, Twistzz, ultimate, YEKINDAR<br />
Global Rank: [6](../../standings_global_2024_08_14.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_08_14.md)<br />
Regional Rank: [6]( ../../standings_europe_2024_08_14.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_08_14.md)<br />
Regional Rank: [1]( ../../standings_americas_2024_08_14.md)<br />
<br />
Final Rank Value:  1736.6<br />
<br />
Final Rank Value (1736.6) = Starting Rank Value (1701.4) + Head To Head Adjustments (35.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.733[<sup>1</sup>](#table2)
- Bounty Collected: 0.653[<sup>2</sup>](#table1)
- Opponent Network: 0.255[<sup>2</sup>](#table1)
- LAN Wins: 0.997[<sup>2</sup>](#table1)

The average of these factors is 0.659<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1701.4
- 400 + ( ( 0.659 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 1701.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           44 |       30 | 2024-08-13 | FaZe             | L   | 1.000      | -            | -                | -                | -         |   -17.06 | jks, NAF, Twistzz, ultimate, YEKINDAR  |
|           43 |       44 | 2024-08-13 | Complexity       | W   | 1.000      | 1.000        | 0.369 (0.369)    | 0.403 (0.403)    | 1 (1.000) |     8.75 | jks, NAF, Twistzz, ultimate, YEKINDAR  |
|           42 |       95 | 2024-08-12 | FURIA            | W   | 1.000      | 1.000        | 0.301 (0.301)    | 0.506 (0.506)    | 1 (1.000) |     9.22 | jks, NAF, Twistzz, ultimate, YEKINDAR  |
|           41 |      139 | 2024-08-10 | FaZe             | L   | 1.000      | -            | -                | -                | -         |   -17.70 | jks, NAF, Twistzz, ultimate, YEKINDAR  |
|           40 |      185 | 2024-08-08 | FURIA            | W   | 1.000      | -            | -                | -                | 1 (1.000) |     9.07 | jks, NAF, Twistzz, ultimate, YEKINDAR  |
|           39 |      214 | 2024-08-07 | paiN             | W   | 1.000      | -            | -                | -                | 1 (1.000) |     5.56 | jks, NAF, Twistzz, ultimate, YEKINDAR  |
|           38 |      360 | 2024-08-03 | Natus Vincere    | W   | 1.000      | 0.581        | 1.000 (0.581)    | 0.415 (0.241)    | 1 (1.000) |    23.67 | jks, NAF, Twistzz, ultimate, YEKINDAR  |
|           37 |      439 | 2024-08-01 | Natus Vincere    | W   | 1.000      | 0.581        | 1.000 (0.581)    | 0.415 (0.241)    | 1 (1.000) |    25.15 | jks, NAF, Twistzz, ultimate, YEKINDAR  |
|           36 |      485 | 2024-07-31 | Virtus.pro       | W   | 1.000      | 0.581        | 0.512 (0.297)    | -                | 1 (1.000) |    13.61 | jks, NAF, Twistzz, ultimate, YEKINDAR  |
|           35 |     2000 | 2024-05-29 | G2               | L   | 0.688      | -            | -                | -                | -         |    -4.06 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           34 |     2026 | 2024-05-28 | Falcons          | W   | 0.681      | 0.624        | 0.250 (0.106)    | -                | 1 (0.681) |     5.98 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           33 |     2044 | 2024-05-27 | 9z               | L   | 0.675      | -            | -                | -                | -         |   -16.35 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           32 |     2057 | 2024-05-27 | Complexity       | W   | 0.673      | 0.624        | 0.369 (0.155)    | 0.403 (0.169)    | 1 (0.673) |     9.83 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           31 |     2126 | 2024-05-23 | Eternal Fire     | L   | 0.646      | -            | -                | -                | -         |   -11.62 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           30 |     2172 | 2024-05-22 | Astralis         | W   | 0.638      | 0.769        | 0.411 (0.202)    | 0.410 (0.201)    | -         |    10.83 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           29 |     2219 | 2024-05-21 | ENCE             | W   | 0.631      | 0.769        | -                | 0.393 (0.190)    | -         |     2.50 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           28 |     2275 | 2024-05-19 | AMKAL            | W   | 0.618      | 0.769        | -                | 0.404 (0.192)    | -         |     0.97 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           27 |     2289 | 2024-05-18 | OG               | W   | 0.614      | -            | -                | -                | -         |     0.41 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           26 |     2580 | 2024-05-10 | Astralis         | L   | 0.559      | -            | -                | -                | -         |    -8.20 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           25 |     2623 | 2024-05-08 | FlyQuest         | W   | 0.546      | -            | -                | -                | 1 (0.546) |     0.75 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           24 |     2691 | 2024-05-04 | MOUZ             | L   | 0.520      | -            | -                | -                | -         |    -5.18 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           23 |     2751 | 2024-05-01 | Monte            | W   | 0.500      | 0.889        | -                | 0.425 (0.189)    | -         |     0.40 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           22 |     2776 | 2024-04-30 | FURIA            | W   | 0.493      | 0.889        | 0.301 (0.132)    | 0.506 (0.222)    | -         |     6.73 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           21 |     3019 | 2024-04-19 | M80              | L   | 0.422      | -            | -                | -                | -         |   -12.59 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           20 |     3069 | 2024-04-18 | M80              | W   | 0.415      | -            | -                | -                | -         |     0.66 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           19 |     3073 | 2024-04-18 | Legacy           | W   | 0.414      | -            | -                | -                | -         |     0.21 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           18 |     3121 | 2024-04-17 | Akimbo           | W   | 0.408      | -            | -                | -                | -         |     0.06 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           17 |     3124 | 2024-04-17 | straykids        | W   | 0.407      | -            | -                | -                | -         |     0.04 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           16 |     3236 | 2024-04-12 | FaZe             | L   | 0.371      | -            | -                | -                | -         |    -5.51 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           15 |     3319 | 2024-04-10 | MOUZ             | L   | 0.357      | -            | -                | -                | -         |    -3.83 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           14 |     3399 | 2024-04-08 | G2               | W   | 0.344      | 0.624        | 1.000 (0.215)    | -                | -         |     9.07 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           13 |     3410 | 2024-04-07 | HEROIC           | W   | 0.342      | -            | -                | -                | -         |     2.59 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           12 |     4081 | 2024-03-07 | SAW              | L   | 0.133      | -            | -                | -                | -         |    -3.27 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           11 |     4163 | 2024-03-04 | Complexity       | L   | 0.114      | -            | -                | -                | -         |    -2.07 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           10 |     4200 | 2024-03-03 | BOSS             | W   | 0.106      | -            | -                | -                | -         |     0.02 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            9 |     4213 | 2024-03-02 | FURIA            | L   | 0.099      | -            | -                | -                | -         |    -1.62 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            8 |     4227 | 2024-03-01 | BESTIA           | W   | 0.094      | -            | -                | -                | -         |     0.06 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            7 |     4298 | 2024-02-26 | Nouns            | W   | 0.069      | -            | -                | -                | -         |     0.02 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            6 |     4300 | 2024-02-26 | BOSS             | W   | 0.067      | -            | -                | -                | -         |     0.01 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            5 |     4311 | 2024-02-25 | Wildcard         | W   | 0.062      | -            | -                | -                | -         |     0.02 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            4 |     4317 | 2024-02-25 | Nouns            | L   | 0.061      | -            | -                | -                | -         |    -1.91 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            3 |     4377 | 2024-02-22 | Party Astronauts | W   | 0.042      | -            | -                | -                | -         |     0.01 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            2 |     4381 | 2024-02-22 | MIGHT            | W   | 0.041      | -            | -                | -                | -         |     0.00 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            1 |     4385 | 2024-02-22 | ex-CatEvil       | W   | 0.041      | -            | -                | -                | -         |     0.00 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($138,313.32)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.43) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-13 |      1.000 | $24,000.00     | $24,000.00      |
| 2024-08-04 |      1.000 | $22,500.00     | $22,500.00      |
| 2024-06-02 |      0.714 | $6,000.00      | $4,281.82       |
| 2024-05-23 |      0.646 | $100,000.00    | $64,600.08      |
| 2024-05-12 |      0.572 | $32,000.00     | $18,319.64      |
| 2024-04-14 |      0.384 | $10,000.00     | $3,843.66       |
| 2024-03-10 |      0.154 | $5,000.00      | $768.13         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
