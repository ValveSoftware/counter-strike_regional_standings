### Roster Details<br />
Team Name: Liquid<br />
Roster: cadiaN, NAF, skullz, Twistzz, YEKINDAR<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [14](../standings_global.md)<br />
Regional Rank: [2]( ../standings_americas.md)<br />
Final Rank Value:  1641.9<br />
<br />
Final Rank Value (1641.9) = Starting Rank Value (1612.0) + Head To Head Adjustments (29.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.766[<sup>1</sup>](#table2)
- Bounty Collected: 0.577[<sup>2</sup>](#table1)
- Opponent Network: 0.272[<sup>2</sup>](#table1)
- LAN Wins: 0.684[<sup>2</sup>](#table1)

The average of these factors is 0.575<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1612.0
- 400 + ( ( 0.575 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1612.0


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
|           48 |      825 | 2024-05-29 | G2               | L   | 0.916      | -            | -                | -                | -         |    -5.98 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           47 |      851 | 2024-05-28 | Falcons          | W   | 0.909      | 0.624        | 0.352 (0.199)    | 0.285 (0.161)    | 1 (0.909) |    11.68 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           46 |      869 | 2024-05-27 | 9z               | L   | 0.903      | -            | -                | -                | -         |   -17.02 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           45 |      882 | 2024-05-27 | Complexity       | W   | 0.900      | 0.624        | 0.440 (0.247)    | 0.427 (0.240)    | 1 (0.900) |    20.31 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           44 |      951 | 2024-05-23 | Eternal Fire     | L   | 0.873      | -            | -                | -                | -         |    -9.78 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           43 |      997 | 2024-05-22 | Astralis         | W   | 0.865      | 0.769        | 0.546 (0.363)    | 0.461 (0.307)    | -         |    22.51 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           42 |     1044 | 2024-05-21 | ENCE             | W   | 0.858      | 0.769        | 0.216 (0.143)    | 0.399 (0.263)    | -         |     6.43 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           41 |     1100 | 2024-05-19 | AMKAL            | W   | 0.846      | 0.769        | 0.135 (0.088)    | 0.559 (0.363)    | -         |     3.01 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           40 |     1114 | 2024-05-18 | OG               | W   | 0.841      | 0.769        | 0.215 (0.139)    | -                | -         |     2.63 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           39 |     1405 | 2024-05-10 | Astralis         | L   | 0.786      | -            | -                | -                | -         |    -3.76 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           38 |     1448 | 2024-05-08 | FlyQuest         | W   | 0.773      | 0.889        | -                | 0.417 (0.287)    | 1 (0.773) |     5.49 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           37 |     1516 | 2024-05-04 | MOUZ             | L   | 0.747      | -            | -                | -                | -         |    -2.92 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           36 |     1576 | 2024-05-01 | Monte            | W   | 0.727      | 0.889        | 0.188 (0.121)    | 0.668 (0.432)    | 1 (0.727) |     2.63 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           35 |     1601 | 2024-04-30 | FURIA            | W   | 0.721      | 0.889        | 0.253 (0.162)    | 0.509 (0.326)    | 1 (0.721) |    11.37 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           34 |     1844 | 2024-04-19 | M80              | L   | 0.649      | -            | -                | -                | -         |   -18.38 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           33 |     1894 | 2024-04-18 | M80              | W   | 0.643      | -            | -                | -                | -         |     1.88 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           32 |     1898 | 2024-04-18 | Legacy           | W   | 0.641      | -            | -                | -                | -         |     1.13 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           31 |     1946 | 2024-04-17 | OMiT             | W   | 0.635      | -            | -                | -                | -         |     0.24 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           30 |     1949 | 2024-04-17 | straykids        | W   | 0.635      | -            | -                | -                | -         |     0.11 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           29 |     2061 | 2024-04-12 | FaZe             | L   | 0.599      | -            | -                | -                | -         |    -3.08 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           28 |     2144 | 2024-04-10 | MOUZ             | L   | 0.584      | -            | -                | -                | -         |    -2.37 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           27 |     2224 | 2024-04-08 | G2               | W   | 0.572      | 0.624        | 0.745 (0.266)    | 0.481 (0.172)    | 1 (0.572) |    15.25 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           26 |     2235 | 2024-04-07 | HEROIC           | W   | 0.570      | 0.624        | 0.338 (0.120)    | 0.480 (0.171)    | 1 (0.570) |    12.71 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           25 |     2906 | 2024-03-07 | SAW              | L   | 0.360      | -            | -                | -                | -         |    -9.71 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           24 |     2988 | 2024-03-04 | Complexity       | L   | 0.342      | -            | -                | -                | -         |    -2.64 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           23 |     3025 | 2024-03-03 | BOSS             | W   | 0.333      | -            | -                | -                | 1 (0.333) |     0.15 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           22 |     3038 | 2024-03-02 | FURIA            | L   | 0.327      | -            | -                | -                | -         |    -4.40 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           21 |     3052 | 2024-03-01 | BESTIA           | W   | 0.321      | -            | -                | -                | 1 (0.321) |     0.38 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           20 |     3123 | 2024-02-26 | Nouns            | W   | 0.296      | -            | -                | -                | -         |     0.28 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           19 |     3125 | 2024-02-26 | BOSS             | W   | 0.295      | -            | -                | -                | -         |     0.13 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           18 |     3136 | 2024-02-25 | Wildcard         | W   | 0.290      | -            | -                | -                | -         |     0.25 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           17 |     3142 | 2024-02-25 | Nouns            | L   | 0.289      | -            | -                | -                | -         |    -8.84 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           16 |     3202 | 2024-02-22 | Party Astronauts | W   | 0.270      | -            | -                | -                | -         |     0.26 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           15 |     3206 | 2024-02-22 | MIGHT            | W   | 0.269      | -            | -                | -                | -         |     0.02 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           14 |     3210 | 2024-02-22 | ex-CatEvil       | W   | 0.268      | -            | -                | -                | -         |     0.01 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           13 |     3716 | 2024-01-28 | G2               | L   | 0.100      | -            | -                | -                | -         |    -0.47 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           12 |     3730 | 2024-01-27 | FaZe             | L   | 0.093      | -            | -                | -                | -         |    -0.48 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           11 |     3772 | 2024-01-25 | GamerLegion      | W   | 0.078      | -            | -                | -                | 1 (0.078) |     0.06 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           10 |     3784 | 2024-01-24 | Spirit           | W   | 0.073      | -            | -                | -                | -         |     2.06 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            9 |     3878 | 2024-01-20 | M80              | L   | 0.050      | -            | -                | -                | -         |    -1.38 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            8 |     3927 | 2024-01-19 | Wildcard         | W   | 0.043      | -            | -                | -                | -         |     0.03 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            7 |     3937 | 2024-01-19 | BOSS             | W   | 0.042      | -            | -                | -                | -         |     0.02 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            6 |     4088 | 2024-01-16 | Elevate          | W   | 0.023      | -            | -                | -                | -         |     0.03 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            5 |     4092 | 2024-01-16 | huge sweaty      | W   | 0.022      | -            | -                | -                | -         |     0.00 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            4 |     4095 | 2024-01-16 | Wildcard         | W   | 0.022      | -            | -                | -                | -         |     0.02 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            3 |     4137 | 2024-01-15 | LOS              | W   | 0.016      | -            | -                | -                | -         |     0.00 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            2 |     4174 | 2024-01-14 | Party Astronauts | W   | 0.009      | -            | -                | -                | -         |     0.01 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            1 |     4195 | 2024-01-13 | Elevate          | W   | 0.002      | -            | -                | -                | -         |     0.00 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($127,653.75)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.49) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      0.941 | $6,000.00      | $5,646.02       |
| 2024-05-23 |      0.873 | $100,000.00    | $87,336.74      |
| 2024-05-12 |      0.800 | $32,000.00     | $25,595.38      |
| 2024-04-14 |      0.612 | $10,000.00     | $6,117.33       |
| 2024-03-10 |      0.381 | $5,000.00      | $1,904.96       |
| 2024-01-28 |      0.100 | $10,500.00     | $1,053.33       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
