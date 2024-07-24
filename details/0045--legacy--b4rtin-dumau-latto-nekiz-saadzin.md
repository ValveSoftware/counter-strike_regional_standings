### Roster Details<br />
Team Name: Legacy<br />
Roster: b4rtiN, dumau, latto, NEKIZ, saadzin<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [45](../standings_global.md)<br />
Regional Rank: [11]( ../standings_americas.md)<br />
Final Rank Value:  1096.7<br />
<br />
Final Rank Value (1096.7) = Starting Rank Value (1035.7) + Head To Head Adjustments (61.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.548[<sup>1</sup>](#table2)
- Bounty Collected: 0.356[<sup>2</sup>](#table1)
- Opponent Network: 0.182[<sup>2</sup>](#table1)
- LAN Wins: 0.169[<sup>2</sup>](#table1)

The average of these factors is 0.314<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1035.7
- 400 + ( ( 0.314 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 1035.7


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
|           34 |      410 | 2024-07-14 | ODDIK            | L   | 1.000      | -            | -                | -                | -         |   -18.68 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           33 |      424 | 2024-07-13 | RED Canids       | W   | 1.000      | 0.371        | 0.102 (0.038)    | 0.793 (0.294)    | 0 (0.000) |    19.50 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           32 |      434 | 2024-07-12 | Bounty Hunters   | W   | 1.000      | 0.371        | 0.027 (0.010)    | 0.469 (0.174)    | 0 (0.000) |    11.22 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           31 |      447 | 2024-07-11 | ODDIK            | L   | 1.000      | -            | -                | -                | -         |   -19.41 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           30 |      469 | 2024-07-10 | Case             | W   | 1.000      | 0.371        | 0.028 (0.010)    | 0.751 (0.278)    | 0 (0.000) |     6.54 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           29 |      498 | 2024-07-09 | Vikings KR       | W   | 1.000      | 0.371        | -                | 0.415 (0.154)    | 0 (0.000) |     5.86 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           28 |      594 | 2024-06-16 | Nouns            | W   | 0.949      | 0.371        | 0.073 (0.026)    | 0.589 (0.207)    | 0 (0.000) |    12.05 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           27 |      598 | 2024-06-16 | Elevate          | W   | 0.948      | 0.371        | 0.035 (0.012)    | 0.563 (0.198)    | -         |    12.05 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           26 |      628 | 2024-06-15 | OMiT             | W   | 0.941      | 0.371        | 0.020 (0.007)    | 0.297 (0.104)    | -         |     6.16 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           25 |      661 | 2024-06-14 | Akimbo           | W   | 0.935      | -            | -                | -                | -         |     2.92 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           24 |      775 | 2024-06-10 | OMiT             | W   | 0.909      | 0.368        | -                | 0.297 (0.099)    | -         |     5.79 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           23 |      808 | 2024-06-09 | Party Astronauts | W   | 0.903      | 0.384        | 0.053 (0.018)    | 0.591 (0.205)    | -         |    12.69 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           22 |      877 | 2024-06-08 | M80              | L   | 0.895      | -            | -                | -                | -         |    -5.21 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           21 |      935 | 2024-06-07 | Party Astronauts | L   | 0.888      | -            | -                | -                | -         |   -15.19 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           20 |      943 | 2024-06-07 | Elevate          | W   | 0.887      | -            | -                | -                | -         |    12.08 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           19 |      987 | 2024-06-06 | Mythic           | W   | 0.882      | 0.384        | -                | 0.310 (0.105)    | -         |     6.55 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           18 |      992 | 2024-06-06 | OMiT             | W   | 0.881      | -            | -                | -                | -         |     5.47 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           17 |     1056 | 2024-06-05 | Vibe             | W   | 0.875      | -            | -                | -                | -         |     0.84 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           16 |     1106 | 2024-06-04 | E-Xolos LAZER    | W   | 0.869      | -            | -                | -                | -         |     4.90 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           15 |     1443 | 2024-05-22 | NRG              | L   | 0.780      | -            | -                | -                | -         |   -15.49 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           14 |     1469 | 2024-05-21 | Limitless        | W   | 0.775      | -            | -                | -                | -         |     5.03 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           13 |     1599 | 2024-05-17 | Party Astronauts | L   | 0.748      | -            | -                | -                | -         |   -14.92 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           12 |     2303 | 2024-04-19 | M80              | L   | 0.562      | -            | -                | -                | -         |    -4.01 | b4rtiN, dumau, latto, NEKIZ, Stewie2K |
|           11 |     2343 | 2024-04-18 | Elevate          | W   | 0.556      | -            | -                | -                | -         |     7.95 | b4rtiN, dumau, latto, NEKIZ, Stewie2K |
|           10 |     2350 | 2024-04-18 | Liquid           | L   | 0.555      | -            | -                | -                | -         |    -1.64 | b4rtiN, dumau, latto, NEKIZ, Stewie2K |
|            9 |     3059 | 2024-03-20 | The MongolZ      | L   | 0.359      | -            | -                | -                | -         |    -0.10 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            8 |     3074 | 2024-03-19 | Apeks            | W   | 0.352      | -            | -                | -                | 1 (0.352) |     4.39 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            7 |     3085 | 2024-03-18 | GamerLegion      | L   | 0.345      | -            | -                | -                | -         |    -8.09 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            6 |     3098 | 2024-03-17 | Cloud9           | L   | 0.341      | -            | -                | -                | -         |    -4.46 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            5 |     3108 | 2024-03-17 | FURIA            | W   | 0.340      | 0.143        | 0.355 (0.017)    | -                | 1 (0.340) |    10.53 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            4 |     3441 | 2024-03-04 | M80              | W   | 0.254      | 0.143        | 0.238 (0.009)    | -                | 1 (0.254) |     6.37 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            3 |     3454 | 2024-03-03 | MIBR             | W   | 0.248      | 0.143        | 0.257 (0.009)    | -                | 1 (0.248) |     7.12 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            2 |     3484 | 2024-03-02 | Nouns            | W   | 0.241      | -            | -                | -                | 1 (0.241) |     2.71 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            1 |     3506 | 2024-03-01 | paiN             | L   | 0.234      | -            | -                | -                | -         |    -0.57 | b4rtiN, coldzera, dumau, latto, NEKIZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($41,503.68)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.15) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-14 |      1.000 | $4,000.00      | $4,000.00       |
| 2024-06-16 |      0.949 | $10,000.00     | $9,489.83       |
| 2024-06-10 |      0.909 | $7,000.00      | $6,362.64       |
| 2024-06-09 |      0.903 | $20,000.00     | $18,050.13      |
| 2024-03-20 |      0.360 | $10,000.00     | $3,601.09       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
