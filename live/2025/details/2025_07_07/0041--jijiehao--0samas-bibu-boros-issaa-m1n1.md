### Roster Details<br />
Team Name: JiJieHao<br />
Roster: 0SAMAS, Bibu, BOROS, ISSAA, m1N1<br />
Global Rank: [41](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [29]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  1067.3<br />
<br />
Final Rank Value (1067.3) = Starting Rank Value (1071.8) + Head To Head Adjustments (-4.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.448[<sup>1</sup>](#table2)
- Bounty Collected: 0.354[<sup>2</sup>](#table1)
- Opponent Network: 0.069[<sup>2</sup>](#table1)
- LAN Wins: 0.569[<sup>2</sup>](#table1)

The average of these factors is 0.360<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1071.8
- 400 + ( ( 0.360 - 0.000 ) / ( 0.858 - 0.000 ) ) * 1600 = 1071.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           32 |      687 | 2025-05-16 | FlyQuest      | L   | 0.851      | -            | -                | -                | -         |    -8.56 | 0SAMAS, Bibu, BOROS, ISSAA, m1N1    |
|           31 |      828 | 2025-05-11 | Lynn Vision   | L   | 0.817      | -            | -                | -                | -         |    -3.93 | 0SAMAS, Bibu, BOROS, ISSAA, m1N1    |
|           30 |      901 | 2025-05-08 | Lynn Vision   | W   | 0.797      | 0.657        | 0.176 (0.092)    | 0.660 (0.346)    | 1 (0.797) |    21.65 | 0SAMAS, Bibu, BOROS, ISSAA, m1N1    |
|           29 |      972 | 2025-05-06 | The Huns      | W   | 0.784      | 0.657        | 0.043 (0.022)    | 0.343 (0.177)    | 1 (0.784) |    10.49 | 0SAMAS, Bibu, BOROS, ISSAA, m1N1    |
|           28 |     1063 | 2025-05-02 | B8            | L   | 0.757      | -            | -                | -                | -         |    -4.00 | 0SAMAS, Bibu, BOROS, ISSAA, m1N1    |
|           27 |     1078 | 2025-05-01 | HEROIC        | L   | 0.752      | -            | -                | -                | -         |    -1.40 | 0SAMAS, Bibu, BOROS, ISSAA, m1N1    |
|           26 |     1122 | 2025-04-30 | SAW           | W   | 0.744      | 0.624        | 0.067 (0.031)    | 0.203 (0.094)    | 1 (0.744) |    10.83 | 0SAMAS, Bibu, BOROS, ISSAA, m1N1    |
|           25 |     1211 | 2025-04-26 | NomadS        | W   | 0.718      | 0.143        | 0.016 (0.002)    | 0.198 (0.020)    | 1 (0.718) |     5.66 | 0SAMAS, Bibu, BOROS, ISSAA, m1N1    |
|           24 |     1299 | 2025-04-20 | Exusiai       | W   | 0.678      | 0.143        | 0.000 (0.000)    | -                | 1 (0.678) |     1.28 | 0SAMAS, Bibu, BOROS, ISSAA, m1N1    |
|           23 |     1362 | 2025-04-17 | The QUBE      | W   | 0.659      | 0.143        | 0.000 (0.000)    | 0.080 (0.008)    | 1 (0.659) |     1.31 | 0SAMAS, Bibu, BOROS, ISSAA, m1N1    |
|           22 |     1503 | 2025-04-10 | ScarX         | W   | 0.612      | 0.143        | -                | 0.073 (0.006)    | 0 (0.000) |     1.03 | 0SAMAS, Bibu, BOROS, ISSAA, m1N1    |
|           21 |     1506 | 2025-04-10 | LFO 5         | W   | 0.611      | -            | -                | -                | 0 (0.000) |     0.54 | 0SAMAS, Bibu, BOROS, ISSAA, m1N1    |
|           20 |     1825 | 2025-04-01 | HOTU          | L   | 0.552      | -            | -                | -                | -         |   -10.30 | 0SAMAS, Bibu, BOROS, ISSAA, m1N1    |
|           19 |     1839 | 2025-03-31 | SemperFi      | W   | 0.545      | 0.143        | 0.006 (0.000)    | 0.164 (0.013)    | -         |     4.17 | 0SAMAS, Bibu, BOROS, ISSAA, m1N1    |
|           18 |     1979 | 2025-03-28 | ScarX         | W   | 0.527      | 0.143        | -                | 0.073 (0.006)    | -         |     0.80 | 0SAMAS, Bibu, BOROS, ISSAA, m1N1    |
|           17 |     2053 | 2025-03-27 | POWERmix      | W   | 0.519      | -            | -                | -                | -         |     0.49 | 0SAMAS, Bibu, BOROS, ISSAA, m1N1    |
|           16 |     2065 | 2025-03-27 | ScarX         | W   | 0.518      | -            | -                | -                | -         |     0.74 | 0SAMAS, Bibu, BOROS, ISSAA, m1N1    |
|           15 |     2664 | 2025-03-08 | Rare Atom     | L   | 0.392      | -            | -                | -                | -         |    -3.67 | Aaron, Bibu, BOROS, dennyslaw, m1N1 |
|           14 |     2683 | 2025-03-07 | Wings Up      | W   | 0.389      | 0.143        | 0.009 (0.000)    | 0.262 (0.015)    | 1 (0.389) |     2.50 | Aaron, Bibu, BOROS, dennyslaw, m1N1 |
|           13 |     2739 | 2025-03-07 | HOTU          | L   | 0.385      | -            | -                | -                | -         |    -8.31 | Aaron, Bibu, BOROS, dennyslaw, m1N1 |
|           12 |     2750 | 2025-03-06 | SemperFi      | W   | 0.383      | 0.143        | 0.006 (0.000)    | 0.164 (0.009)    | 1 (0.383) |     2.46 | Aaron, Bibu, BOROS, dennyslaw, m1N1 |
|           11 |     3000 | 2025-02-26 | POWERmix      | W   | 0.326      | -            | -                | -                | -         |     0.29 | Aaron, Bibu, BOROS, dennyslaw, m1N1 |
|           10 |     3042 | 2025-02-25 | POWERmix      | W   | 0.319      | -            | -                | -                | -         |     0.27 | Aaron, Bibu, BOROS, dennyslaw, m1N1 |
|            9 |     3077 | 2025-02-24 | Monte         | L   | 0.312      | -            | -                | -                | -         |    -8.36 | Aaron, Bibu, BOROS, dennyslaw, m1N1 |
|            8 |     3081 | 2025-02-24 | TheShtrongolZ | W   | 0.312      | -            | -                | -                | -         |     0.25 | Aaron, Bibu, BOROS, dennyslaw, m1N1 |
|            7 |     3236 | 2025-02-18 | SINNERS       | L   | 0.274      | -            | -                | -                | -         |    -5.33 | Aaron, Bibu, BOROS, dennyslaw, m1N1 |
|            6 |     3469 | 2025-02-09 | Wings Up      | L   | 0.217      | -            | -                | -                | -         |    -5.69 | Aaron, Bibu, dennyslaw, ISSAA, m1N1 |
|            5 |     3496 | 2025-02-09 | Rare Atom     | L   | 0.211      | -            | -                | -                | -         |    -2.14 | Aaron, Bibu, dennyslaw, ISSAA, m1N1 |
|            4 |     3565 | 2025-02-07 | Housebets     | W   | 0.203      | 0.143        | 0.006 (0.000)    | -                | -         |     0.80 | Aaron, Bibu, dennyslaw, ISSAA, m1N1 |
|            3 |     3755 | 2025-01-28 | CPH Wolves    | L   | 0.134      | -            | -                | -                | -         |    -3.79 | Aaron, Bibu, dennyslaw, ISSAA, m1N1 |
|            2 |     3786 | 2025-01-27 | PARIVISION    | L   | 0.127      | -            | -                | -                | -         |    -2.22 | Aaron, Bibu, dennyslaw, ISSAA, m1N1 |
|            1 |     3869 | 2025-01-23 | 9 Pandas      | L   | 0.101      | -            | -                | -                | -         |    -2.42 | Aaron, Bibu, dennyslaw, ISSAA, m1N1 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($29,435.72)
- Divide that value by the 5th highest value among all rosters ($499,535.85)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-16 |      0.852 | $30,000.00     | $25,574.64      |
| 2025-05-04 |      0.772 | $5,000.00      | $3,861.08       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
