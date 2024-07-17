### Roster Details<br />
Team Name: Legacy<br />
Roster: b4rtiN, dumau, latto, NEKIZ, saadzin<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [44](../standings_global.md)<br />
Regional Rank: [11]( ../standings_americas.md)<br />
Final Rank Value:  1149.3<br />
<br />
Final Rank Value (1149.3) = Starting Rank Value (1106.0) + Head To Head Adjustments (43.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.572[<sup>1</sup>](#table2)
- Bounty Collected: 0.365[<sup>2</sup>](#table1)
- Opponent Network: 0.184[<sup>2</sup>](#table1)
- LAN Wins: 0.194[<sup>2</sup>](#table1)

The average of these factors is 0.329<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1106.0
- 400 + ( ( 0.329 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1106.0


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
|           38 |      122 | 2024-07-14 | ODDIK            | L   | 1.000      | -            | -                | -                | -         |   -19.86 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           37 |      136 | 2024-07-13 | RED Canids       | W   | 1.000      | 0.371        | 0.123 (0.045)    | 0.714 (0.265)    | 0 (0.000) |    19.31 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           36 |      146 | 2024-07-12 | Bounty Hunters   | W   | 1.000      | 0.371        | 0.030 (0.011)    | 0.441 (0.163)    | 0 (0.000) |     9.95 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           35 |      159 | 2024-07-11 | ODDIK            | L   | 1.000      | -            | -                | -                | -         |   -20.71 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           34 |      181 | 2024-07-10 | Case             | W   | 1.000      | 0.371        | 0.034 (0.012)    | 0.697 (0.258)    | 0 (0.000) |     5.47 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           33 |      210 | 2024-07-09 | Vikings KR       | W   | 1.000      | 0.371        | -                | 0.430 (0.159)    | 0 (0.000) |     4.61 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           32 |      306 | 2024-06-16 | Nouns            | W   | 0.996      | 0.371        | 0.087 (0.032)    | 0.566 (0.209)    | 0 (0.000) |    11.84 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           31 |      310 | 2024-06-16 | Elevate          | W   | 0.995      | 0.371        | 0.042 (0.015)    | 0.583 (0.215)    | -         |    11.71 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           30 |      340 | 2024-06-15 | OMiT             | W   | 0.988      | 0.371        | 0.024 (0.009)    | 0.320 (0.117)    | -         |     5.85 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           29 |      373 | 2024-06-14 | Akimbo           | W   | 0.982      | -            | -                | -                | -         |     2.57 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           28 |      487 | 2024-06-10 | OMiT             | W   | 0.956      | 0.368        | -                | 0.320 (0.113)    | -         |     5.47 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           27 |      520 | 2024-06-09 | Party Astronauts | W   | 0.950      | 0.384        | 0.063 (0.023)    | 0.604 (0.221)    | -         |    12.58 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           26 |      589 | 2024-06-08 | M80              | L   | 0.942      | -            | -                | -                | -         |    -7.18 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           25 |      647 | 2024-06-07 | Party Astronauts | L   | 0.935      | -            | -                | -                | -         |   -16.80 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           24 |      655 | 2024-06-07 | Elevate          | W   | 0.934      | -            | -                | -                | -         |    11.63 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           23 |      699 | 2024-06-06 | Mythic           | W   | 0.929      | 0.384        | -                | 0.341 (0.122)    | -         |     6.16 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           22 |      704 | 2024-06-06 | OMiT             | W   | 0.929      | -            | -                | -                | -         |     5.07 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           21 |      768 | 2024-06-05 | Vibe             | W   | 0.923      | -            | -                | -                | -         |     0.62 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           20 |      818 | 2024-06-04 | E-Xolos LAZER    | W   | 0.916      | -            | -                | -                | -         |     4.40 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           19 |     1155 | 2024-05-22 | NRG              | L   | 0.827      | -            | -                | -                | -         |   -17.40 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           18 |     1181 | 2024-05-21 | Limitless        | W   | 0.822      | -            | -                | -                | -         |     4.63 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           17 |     1311 | 2024-05-17 | Party Astronauts | L   | 0.795      | -            | -                | -                | -         |   -16.72 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           16 |     2015 | 2024-04-19 | M80              | L   | 0.609      | -            | -                | -                | -         |    -6.55 | b4rtiN, dumau, latto, NEKIZ, Stewie2K |
|           15 |     2055 | 2024-04-18 | Elevate          | W   | 0.603      | -            | -                | -                | -         |     7.83 | b4rtiN, dumau, latto, NEKIZ, Stewie2K |
|           14 |     2062 | 2024-04-18 | Liquid           | L   | 0.602      | -            | -                | -                | -         |    -1.38 | b4rtiN, dumau, latto, NEKIZ, Stewie2K |
|           13 |     2771 | 2024-03-20 | The MongolZ      | L   | 0.406      | -            | -                | -                | -         |    -0.12 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           12 |     2786 | 2024-03-19 | Apeks            | W   | 0.400      | -            | -                | -                | 1 (0.400) |     5.09 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           11 |     2797 | 2024-03-18 | GamerLegion      | L   | 0.392      | -            | -                | -                | -         |    -8.96 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           10 |     2810 | 2024-03-17 | Cloud9           | L   | 0.388      | -            | -                | -                | -         |    -4.75 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            9 |     2820 | 2024-03-17 | FURIA            | W   | 0.387      | 0.143        | 0.253 (0.014)    | -                | 1 (0.387) |    11.58 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            8 |     3153 | 2024-03-04 | M80              | W   | 0.301      | 0.143        | 0.219 (0.009)    | -                | 1 (0.301) |     6.47 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            7 |     3166 | 2024-03-03 | MIBR             | W   | 0.295      | 0.143        | 0.269 (0.011)    | -                | 1 (0.295) |     8.61 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            6 |     3196 | 2024-03-02 | Nouns            | W   | 0.288      | -            | -                | -                | 1 (0.288) |     3.01 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            5 |     3218 | 2024-03-01 | paiN             | L   | 0.281      | -            | -                | -                | -         |    -0.58 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            4 |     3986 | 2024-01-22 | Sharks           | L   | 0.022      | -            | -                | -                | -         |    -0.45 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            3 |     4048 | 2024-01-20 | RED Canids       | W   | 0.008      | -            | -                | -                | -         |     0.16 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            2 |     4098 | 2024-01-19 | paiN             | W   | 0.002      | -            | -                | -                | -         |     0.07 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            1 |     4104 | 2024-01-19 | 9z               | W   | 0.002      | -            | -                | -                | -         |     0.05 | b4rtiN, coldzera, dumau, latto, NEKIZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($43,723.26)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.18) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-14 |      1.000 | $4,000.00      | $4,000.00       |
| 2024-06-16 |      0.996 | $10,000.00     | $9,962.08       |
| 2024-06-10 |      0.956 | $7,000.00      | $6,693.22       |
| 2024-06-09 |      0.950 | $20,000.00     | $18,994.63      |
| 2024-03-20 |      0.407 | $10,000.00     | $4,073.34       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
