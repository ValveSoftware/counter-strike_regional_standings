### Roster Details<br />
Team Name: Legacy<br />
Roster: b4rtiN, dumau, latto, NEKIZ, saadzin<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [45](../standings_global.md)<br />
Regional Rank: [11]( ../standings_americas.md)<br />
Final Rank Value:  1147.5<br />
<br />
Final Rank Value (1147.5) = Starting Rank Value (1077.9) + Head To Head Adjustments (69.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.556[<sup>1</sup>](#table2)
- Bounty Collected: 0.353[<sup>2</sup>](#table1)
- Opponent Network: 0.159[<sup>2</sup>](#table1)
- LAN Wins: 0.216[<sup>2</sup>](#table1)

The average of these factors is 0.321<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1077.9
- 400 + ( ( 0.321 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1077.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           40 |       17 | 2024-07-10 | Case             | W   | 1.000      | 0.371        | 0.033 (0.012)    | 0.582 (0.216)    | 0 (0.000) |     4.89 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           39 |       46 | 2024-07-09 | Vikings KR       | W   | 1.000      | 0.371        | -                | 0.432 (0.160)    | 0 (0.000) |     4.33 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           38 |      142 | 2024-06-16 | Nouns            | W   | 1.000      | 0.371        | 0.086 (0.032)    | 0.484 (0.179)    | 0 (0.000) |    12.85 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           37 |      146 | 2024-06-16 | Elevate          | W   | 1.000      | 0.371        | 0.041 (0.015)    | 0.596 (0.221)    | 0 (0.000) |    12.25 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           36 |      176 | 2024-06-15 | OMiT             | W   | 1.000      | 0.371        | 0.024 (0.009)    | 0.332 (0.123)    | 0 (0.000) |     6.40 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           35 |      209 | 2024-06-14 | Akimbo           | W   | 1.000      | -            | -                | -                | -         |     2.80 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           34 |      323 | 2024-06-10 | OMiT             | W   | 0.996      | 0.368        | 0.024 (0.009)    | 0.332 (0.121)    | -         |     6.19 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           33 |      356 | 2024-06-09 | Party Astronauts | W   | 0.989      | 0.384        | 0.062 (0.024)    | 0.589 (0.224)    | -         |    13.81 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           32 |      425 | 2024-06-08 | M80              | L   | 0.981      | -            | -                | -                | -         |    -7.67 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           31 |      483 | 2024-06-07 | Party Astronauts | L   | 0.974      | -            | -                | -                | -         |   -16.69 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           30 |      491 | 2024-06-07 | Elevate          | W   | 0.974      | -            | -                | -                | -         |    12.62 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           29 |      535 | 2024-06-06 | Mythic           | W   | 0.969      | 0.384        | -                | 0.359 (0.134)    | -         |     7.32 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           28 |      540 | 2024-06-06 | OMiT             | W   | 0.968      | 0.368        | 0.024 (0.008)    | 0.332 (0.118)    | -         |     5.81 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           27 |      604 | 2024-06-05 | Vibe             | W   | 0.962      | -            | -                | -                | -         |     0.73 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           26 |      654 | 2024-06-04 | E-Xolos LAZER    | W   | 0.956      | 0.368        | -                | 0.282 (0.099)    | -         |     4.22 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           25 |      991 | 2024-05-22 | NRG              | L   | 0.867      | -            | -                | -                | -         |   -17.52 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           24 |     1017 | 2024-05-21 | Carpe Diem       | W   | 0.862      | -            | -                | -                | -         |     4.74 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           23 |     1147 | 2024-05-17 | Party Astronauts | L   | 0.835      | -            | -                | -                | -         |   -16.82 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           22 |     1851 | 2024-04-19 | M80              | L   | 0.648      | -            | -                | -                | -         |    -7.57 | b4rtiN, dumau, latto, NEKIZ, Stewie2K |
|           21 |     1891 | 2024-04-18 | Elevate          | W   | 0.643      | -            | -                | -                | -         |     8.48 | b4rtiN, dumau, latto, NEKIZ, Stewie2K |
|           20 |     1898 | 2024-04-18 | Liquid           | L   | 0.641      | -            | -                | -                | -         |    -1.13 | b4rtiN, dumau, latto, NEKIZ, Stewie2K |
|           19 |     2607 | 2024-03-20 | The MongolZ      | L   | 0.445      | -            | -                | -                | -         |    -0.12 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           18 |     2622 | 2024-03-19 | Apeks            | W   | 0.439      | -            | -                | -                | 1 (0.439) |     6.35 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           17 |     2633 | 2024-03-18 | GamerLegion      | L   | 0.432      | -            | -                | -                | -         |    -8.84 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           16 |     2646 | 2024-03-17 | Cloud9           | L   | 0.427      | -            | -                | -                | -         |    -4.21 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           15 |     2656 | 2024-03-17 | FURIA            | W   | 0.426      | 0.143        | 0.253 (0.015)    | -                | 1 (0.426) |    12.87 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           14 |     2989 | 2024-03-04 | M80              | W   | 0.341      | 0.143        | 0.218 (0.011)    | -                | 1 (0.341) |     7.65 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           13 |     3002 | 2024-03-03 | MIBR             | W   | 0.335      | 0.143        | 0.270 (0.013)    | -                | 1 (0.335) |     9.90 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           12 |     3032 | 2024-03-02 | Nouns            | W   | 0.328      | -            | -                | -                | 1 (0.328) |     3.80 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           11 |     3054 | 2024-03-01 | paiN             | L   | 0.321      | -            | -                | -                | -         |    -0.58 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           10 |     3822 | 2024-01-22 | Sharks           | L   | 0.062      | -            | -                | -                | -         |    -1.22 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            9 |     3884 | 2024-01-20 | RED Canids       | W   | 0.048      | -            | -                | -                | -         |     0.94 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            8 |     3934 | 2024-01-19 | paiN             | W   | 0.042      | -            | -                | -                | -         |     1.25 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            7 |     3940 | 2024-01-19 | 9z               | W   | 0.041      | -            | -                | -                | -         |     1.27 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            6 |     4089 | 2024-01-16 | RED Canids       | L   | 0.022      | -            | -                | -                | -         |    -0.27 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            5 |     4100 | 2024-01-16 | W7M              | W   | 0.021      | -            | -                | -                | -         |     0.12 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            4 |     4102 | 2024-01-16 | Imperial         | W   | 0.021      | -            | -                | -                | -         |     0.61 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            3 |     4141 | 2024-01-15 | Galorys          | W   | 0.015      | -            | -                | -                | -         |     0.12 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            2 |     4182 | 2024-01-14 | RED Canids       | L   | 0.008      | -            | -                | -                | -         |    -0.09 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            1 |     4201 | 2024-01-13 | inSanitY         | W   | 0.002      | -            | -                | -                | -         |     0.00 | b4rtiN, coldzera, dumau, latto, NEKIZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($41,226.76)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.16) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-06-10 |      0.996 | $7,000.00      | $6,970.49       |
| 2024-06-09 |      0.989 | $20,000.00     | $19,786.83      |
| 2024-03-20 |      0.447 | $10,000.00     | $4,469.44       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
