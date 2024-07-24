### Roster Details<br />
Team Name: E-Xolos LAZER<br />
Roster: danoco, land1n, mawth, tatazin, w1<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [120](../standings_global.md)<br />
Regional Rank: [29]( ../standings_americas.md)<br />
Final Rank Value:  805.1<br />
<br />
Final Rank Value (805.1) = Starting Rank Value (760.0) + Head To Head Adjustments (45.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.348[<sup>1</sup>](#table2)
- Bounty Collected: 0.305[<sup>2</sup>](#table1)
- Opponent Network: 0.058[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.178<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 760.0
- 400 + ( ( 0.178 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 760.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           21 |      180 | 2024-07-18 | NRG              | L   | 1.000      | -            | -                | -                | -         |    -7.57 | danoco, land1n, mawth, tatazin, w1   |
|           20 |      184 | 2024-07-18 | NRG              | L   | 1.000      | -            | -                | -                | -         |    -8.08 | danoco, land1n, mawth, tatazin, w1   |
|           19 |      306 | 2024-07-16 | Nouns            | W   | 1.000      | 0.477        | 0.073 (0.035)    | 0.589 (0.281)    | 0 (0.000) |    23.93 | danoco, land1n, mawth, tatazin, w1   |
|           18 |      310 | 2024-07-16 | Nouns            | L   | 1.000      | -            | -                | -                | -         |    -7.07 | danoco, land1n, mawth, tatazin, w1   |
|           17 |      595 | 2024-06-16 | OMiT             | W   | 0.949      | 0.143        | 0.020 (0.003)    | 0.297 (0.040)    | 0 (0.000) |    14.93 | land1n, mawth, RenanZin, tatazin, w1 |
|           16 |      623 | 2024-06-15 | Strife           | W   | 0.942      | 0.143        | 0.010 (0.001)    | 0.138 (0.019)    | 0 (0.000) |    10.13 | land1n, mawth, RenanZin, tatazin, w1 |
|           15 |      657 | 2024-06-14 | Take Flyte       | L   | 0.936      | -            | -                | -                | -         |   -19.26 | land1n, mawth, RenanZin, tatazin, w1 |
|           14 |      707 | 2024-06-13 | Limitless        | W   | 0.927      | 0.371        | 0.007 (0.002)    | 0.153 (0.053)    | 0 (0.000) |    14.10 | land1n, mawth, RenanZin, tatazin, w1 |
|           13 |      732 | 2024-06-12 | Strife           | W   | 0.922      | 0.143        | 0.010 (0.001)    | 0.138 (0.018)    | 0 (0.000) |    10.54 | land1n, mawth, RenanZin, tatazin, w1 |
|           12 |      733 | 2024-06-12 | Limitless        | W   | 0.921      | 0.143        | 0.001 (0.000)    | 0.196 (0.026)    | 0 (0.000) |     8.51 | land1n, mawth, RenanZin, tatazin, w1 |
|           11 |      784 | 2024-06-10 | Strife           | W   | 0.907      | 0.371        | 0.010 (0.003)    | 0.138 (0.047)    | 0 (0.000) |    11.87 | land1n, mawth, RenanZin, tatazin, w1 |
|           10 |      809 | 2024-06-09 | OMiT             | L   | 0.903      | -            | -                | -                | -         |   -12.38 | land1n, mawth, RenanZin, tatazin, w1 |
|            9 |      871 | 2024-06-08 | straykids        | W   | 0.896      | 0.368        | 0.007 (0.002)    | -                | 0 (0.000) |    10.53 | land1n, mawth, RenanZin, tatazin, w1 |
|            8 |      880 | 2024-06-08 | Akimbo           | W   | 0.894      | 0.371        | 0.004 (0.001)    | 0.086 (0.029)    | 0 (0.000) |    10.98 | land1n, mawth, RenanZin, tatazin, w1 |
|            7 |      927 | 2024-06-07 | Strife           | W   | 0.889      | 0.368        | 0.010 (0.003)    | 0.138 (0.045)    | 0 (0.000) |    13.31 | land1n, mawth, RenanZin, tatazin, w1 |
|            6 |      988 | 2024-06-06 | Snakes Den       | L   | 0.882      | -            | -                | -                | -         |   -20.98 | land1n, mawth, RenanZin, tatazin, w1 |
|            5 |     1001 | 2024-06-06 | Party Astronauts | L   | 0.880      | -            | -                | -                | -         |    -6.26 | land1n, mawth, RenanZin, tatazin, w1 |
|            4 |     1106 | 2024-06-04 | Legacy           | L   | 0.869      | -            | -                | -                | -         |    -4.90 | land1n, mawth, RenanZin, tatazin, w1 |
|            3 |     1147 | 2024-06-03 | Perseverance     | W   | 0.861      | 0.371        | -                | 0.072 (0.023)    | -         |     5.73 | land1n, mawth, RenanZin, tatazin, w1 |
|            2 |     1514 | 2024-05-20 | M80              | L   | 0.767      | -            | -                | -                | -         |    -1.12 | land1n, mawth, RenanZin, tatazin, w1 |
|            1 |     3805 | 2024-02-16 | Mythic           | L   | 0.141      | -            | -                | -                | -         |    -1.88 | land1n, mawth, RenanZin, tatazin, w1 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,711.27)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.949 | $750.00        | $711.74         |
| 2024-06-10 |      0.909 | $3,300.00      | $2,999.53       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
