### Roster Details<br />
Team Name: kONO<br />
Roster: amster, byr9, kensizor, Polbandana, s4ltovsk1yy<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [102](../standings_global.md)<br />
Regional Rank: [74]( ../standings_europe.md)<br />
Final Rank Value:  900.0<br />
<br />
Final Rank Value (900.0) = Starting Rank Value (862.7) + Head To Head Adjustments (37.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.421[<sup>1</sup>](#table2)
- Bounty Collected: 0.337[<sup>2</sup>](#table1)
- Opponent Network: 0.103[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.215<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 862.7
- 400 + ( ( 0.215 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 862.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           41 |       61 | 2024-07-16 | Illuminar         | L   | 1.000      | -            | -                | -                | -         |   -14.08 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           40 |      114 | 2024-07-15 | UNiTY             | L   | 1.000      | -            | -                | -                | -         |   -10.94 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           39 |      117 | 2024-07-14 | Turkey            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.53 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           38 |      119 | 2024-07-14 | Nexus             | W   | 1.000      | 0.143        | -                | 0.432 (0.062)    | 0 (0.000) |     9.14 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           37 |      123 | 2024-07-14 | Turkey            | L   | 1.000      | -            | -                | -                | -         |   -27.29 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           36 |      169 | 2024-07-11 | Illuminar         | W   | 1.000      | 0.371        | 0.018 (0.007)    | 0.354 (0.131)    | 0 (0.000) |    15.76 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           35 |      180 | 2024-07-10 | Nexus             | W   | 1.000      | 0.143        | -                | 0.432 (0.062)    | 0 (0.000) |     8.66 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           34 |      211 | 2024-07-09 | 500               | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.77 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           33 |      240 | 2024-07-07 | Revenant          | L   | 1.000      | -            | -                | -                | -         |   -18.68 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           32 |      244 | 2024-07-06 | BRUTE             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.53 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           31 |      247 | 2024-07-05 | Johnny Speeds     | L   | 1.000      | -            | -                | -                | -         |    -3.04 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           30 |      258 | 2024-06-30 | Lazer Cats        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.11 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           29 |      300 | 2024-06-18 | UNiTY             | W   | 1.000      | 0.333        | 0.039 (0.013)    | 0.364 (0.121)    | 0 (0.000) |    20.31 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           28 |      305 | 2024-06-17 | EXO               | W   | 0.998      | 0.333        | 0.019 (0.006)    | -                | 0 (0.000) |    11.79 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           27 |     1095 | 2024-05-25 | Rebels            | L   | 0.845      | -            | -                | -                | -         |    -7.56 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           26 |     1205 | 2024-05-21 | Serbia            | L   | 0.819      | -            | -                | -                | -         |   -16.35 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           25 |     1364 | 2024-05-16 | Monte             | L   | 0.786      | -            | -                | -                | -         |    -9.47 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           24 |     1375 | 2024-05-16 | Zero Tenacity     | L   | 0.785      | -            | -                | -                | -         |    -7.17 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           23 |     1425 | 2024-05-15 | Preasy            | W   | 0.778      | 0.333        | 0.013 (0.003)    | -                | 0 (0.000) |     8.13 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           22 |     1472 | 2024-05-14 | Alliance          | W   | 0.773      | 0.384        | 0.021 (0.006)    | 0.349 (0.104)    | -         |    12.57 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           21 |     1479 | 2024-05-14 | Johnny Speeds     | W   | 0.772      | 0.333        | 0.162 (0.042)    | 0.852 (0.219)    | -         |    22.58 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           20 |     1499 | 2024-05-13 | Verdant           | W   | 0.765      | 0.333        | 0.013 (0.003)    | 0.316 (0.081)    | -         |    10.92 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           19 |     1795 | 2024-04-29 | Gaimin Gladiators | W   | 0.673      | 0.384        | 0.067 (0.017)    | 0.488 (0.126)    | -         |    17.18 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           18 |     1899 | 2024-04-25 | HAVU              | W   | 0.645      | 0.384        | -                | 0.202 (0.050)    | -         |     6.91 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           17 |     2362 | 2024-04-09 | ex-Preasy         | L   | 0.538      | -            | -                | -                | -         |    -7.03 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           16 |     2855 | 2024-03-15 | Metizport         | W   | 0.374      | 0.143        | 0.064 (0.003)    | -                | -         |     8.08 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           15 |     2958 | 2024-03-12 | JANO              | W   | 0.353      | -            | -                | -                | -         |     3.36 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|           14 |     2970 | 2024-03-11 | CYBERSHOKE        | L   | 0.348      | -            | -                | -                | -         |    -7.72 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|           13 |     3018 | 2024-03-09 | Enterprise        | W   | 0.333      | 0.372        | 0.055 (0.007)    | 0.635 (0.079)    | -         |     7.00 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|           12 |     3062 | 2024-03-07 | Endpoint          | L   | 0.321      | -            | -                | -                | -         |    -4.22 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|           11 |     3075 | 2024-03-07 | Permitta          | L   | 0.319      | -            | -                | -                | -         |    -3.36 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|           10 |     3185 | 2024-03-03 | ex-Preasy         | L   | 0.294      | -            | -                | -                | -         |    -4.54 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            9 |     3207 | 2024-03-02 | MOUZ NXT          | L   | 0.286      | -            | -                | -                | -         |    -1.89 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            8 |     3245 | 2024-02-28 | Aurora            | L   | 0.268      | -            | -                | -                | -         |    -0.10 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            7 |     3250 | 2024-02-28 | KOI               | L   | 0.267      | -            | -                | -                | -         |    -1.12 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            6 |     3265 | 2024-02-27 | DMS               | W   | 0.261      | -            | -                | -                | -         |     4.54 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            5 |     3275 | 2024-02-27 | INGLORIOUS        | W   | 0.260      | -            | -                | -                | -         |     1.25 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            4 |     3276 | 2024-02-27 | AURA              | W   | 0.260      | -            | -                | -                | -         |     1.10 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            3 |     3499 | 2024-02-17 | Aurora            | L   | 0.194      | -            | -                | -                | -         |    -0.06 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            2 |     3501 | 2024-02-17 | The Chosen Few    | W   | 0.193      | -            | -                | -                | -         |     1.76 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            1 |     3506 | 2024-02-17 | Aurora            | L   | 0.193      | -            | -                | -                | -         |    -0.06 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,404.64)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-30 |      1.000 | $1,250.00      | $1,250.00       |
| 2024-06-18 |      1.000 | $6,000.00      | $6,000.00       |
| 2024-05-18 |      0.801 | $1,000.00      | $800.69         |
| 2024-05-16 |      0.785 | $3,000.00      | $2,353.95       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
