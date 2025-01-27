### Roster Details<br />
Team Name: undefined<br />
Roster: BeaKie, chop, cxzi, motm, stamina<br />
Global Rank: [169](../../standings_global_2025_01_27.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_27.md)<br />
Regional Rank: [47]( ../../standings_americas_2025_01_27.md)<br />
<br />
Final Rank Value:  681.1<br />
<br />
Final Rank Value (681.1) = Starting Rank Value (663.9) + Head To Head Adjustments (17.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.322[<sup>1</sup>](#table2)
- Bounty Collected: 0.214[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.135<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 663.9
- 400 + ( ( 0.135 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 663.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     2097 | 2024-09-29 | Party Astronauts | L   | 0.402      | -            | -                | -                | -         |    -2.85 | BeaKie, chop, cxzi, motm, stamina   |
|           13 |     2415 | 2024-09-21 | Akimbo           | L   | 0.350      | -            | -                | -                | -         |    -4.95 | BeaKie, chop, CLASIA, motm, stamina |
|           12 |     2463 | 2024-09-19 | InControl        | W   | 0.336      | 0.372        | 0.006 (0.001)    | 0.044 (0.005)    | 0 (0.000) |     4.55 | BeaKie, chop, CLASIA, motm, stamina |
|           11 |     2506 | 2024-09-18 | Mythic           | W   | 0.328      | 0.371        | 0.000 (0.000)    | 0.082 (0.010)    | 0 (0.000) |     3.11 | BeaKie, chop, CLASIA, motm, stamina |
|           10 |     2535 | 2024-09-17 | MIGHT            | W   | 0.323      | 0.372        | 0.006 (0.001)    | 0.160 (0.019)    | 0 (0.000) |     6.69 | BeaKie, chop, CLASIA, motm, stamina |
|            9 |     2567 | 2024-09-16 | USA              | W   | 0.315      | 0.371        | 0.000 (0.000)    | 0.022 (0.003)    | 0 (0.000) |     2.58 | BeaKie, chop, CLASIA, motm, stamina |
|            8 |     2585 | 2024-09-15 | Final Form       | W   | 0.309      | 0.372        | 0.003 (0.000)    | 0.038 (0.004)    | 0 (0.000) |     3.99 | BeaKie, chop, CLASIA, motm, stamina |
|            7 |     2653 | 2024-09-13 | Exceritus        | W   | 0.296      | 0.372        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.92 | BeaKie, chop, CLASIA, motm, stamina |
|            6 |     3517 | 2024-08-19 | FLUFFY AIMERS    | L   | 0.128      | -            | -                | -                | -         |    -0.81 | BeaKie, chop, CLASIA, motm, stamina |
|            5 |     3567 | 2024-08-17 | M80              | L   | 0.115      | -            | -                | -                | -         |    -0.23 | BeaKie, chop, CLASIA, motm, stamina |
|            4 |     3652 | 2024-08-14 | Limitless        | W   | 0.096      | 0.371        | 0.003 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     1.39 | BeaKie, chop, CLASIA, motm, stamina |
|            3 |     3829 | 2024-08-08 | USA              | W   | 0.056      | 0.371        | 0.000 (0.000)    | 0.022 (0.000)    | 0 (0.000) |     0.47 | BeaKie, chop, CLASIA, motm, stamina |
|            2 |     4006 | 2024-08-03 | Nouns            | L   | 0.023      | -            | -                | -                | -         |    -0.06 | BeaKie, chop, CLASIA, motm, stamina |
|            1 |     4011 | 2024-08-03 | E-Xolos LAZER    | W   | 0.022      | 0.371        | 0.008 (0.000)    | 0.150 (0.001)    | 0 (0.000) |     0.37 | BeaKie, chop, CLASIA, motm, stamina |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,596.75)
- Divide that value by the 5th highest value among all rosters ($204,341.08)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-21 |      0.350 | $4,300.00      | $1,504.59       |
| 2024-08-18 |      0.123 | $750.00        | $92.16          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
