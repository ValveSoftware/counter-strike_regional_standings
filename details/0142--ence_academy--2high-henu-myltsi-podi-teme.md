### Roster Details<br />
Team Name: ENCE Academy<br />
Roster: 2high, HENU, myltsi, podi, teme<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [142](../standings_global.md)<br />
Regional Rank: [93]( ../standings_europe.md)<br />
Final Rank Value:  765.8<br />
<br />
Final Rank Value (765.8) = Starting Rank Value (784.4) + Head To Head Adjustments (-18.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.325[<sup>1</sup>](#table2)
- Bounty Collected: 0.280[<sup>2</sup>](#table1)
- Opponent Network: 0.055[<sup>2</sup>](#table1)
- LAN Wins: 0.056[<sup>2</sup>](#table1)

The average of these factors is 0.179<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 784.4
- 400 + ( ( 0.179 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 784.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           20 |     1653 | 2024-05-06 | Permitta        | L   | 0.719      | -            | -                | -                | -         |    -6.00 | 2high, HENU, myltsi, podi, teme |
|           19 |     1664 | 2024-05-05 | Heimo           | L   | 0.714      | -            | -                | -                | -         |   -12.88 | 2high, HENU, myltsi, podi, teme |
|           18 |     1673 | 2024-05-05 | jefet           | W   | 0.712      | 0.306        | 0.002 (0.000)    | 0.027 (0.006)    | 0 (0.000) |     4.60 | 2high, HENU, myltsi, podi, teme |
|           17 |     1690 | 2024-05-04 | TMVG            | W   | 0.706      | 0.306        | 0.000 (0.000)    | 0.004 (0.001)    | 0 (0.000) |     2.32 | 2high, HENU, myltsi, podi, teme |
|           16 |     1708 | 2024-05-03 | Nexus           | W   | 0.699      | 0.435        | 0.011 (0.003)    | 0.432 (0.131)    | 0 (0.000) |    13.52 | 2high, HENU, myltsi, podi, teme |
|           15 |     1738 | 2024-05-01 | Enterprise      | L   | 0.688      | -            | -                | -                | -         |    -6.25 | 2high, HENU, myltsi, podi, teme |
|           14 |     1758 | 2024-05-01 | Sampi           | L   | 0.685      | -            | -                | -                | -         |    -4.93 | HENU, myltsi, podi, S1rva, teme |
|           13 |     1776 | 2024-04-30 | Endpoint        | L   | 0.679      | -            | -                | -                | -         |    -6.25 | HENU, myltsi, podi, S1rva, teme |
|           12 |     1786 | 2024-04-29 | RUSH B          | L   | 0.674      | -            | -                | -                | -         |    -7.96 | HENU, myltsi, podi, S1rva, teme |
|           11 |     1817 | 2024-04-28 | Heimo           | L   | 0.666      | -            | -                | -                | -         |   -13.08 | HENU, myltsi, podi, S1rva, teme |
|           10 |     1949 | 2024-04-22 | ALTERNATE aTTaX | L   | 0.625      | -            | -                | -                | -         |    -5.22 | HENU, myltsi, podi, S1rva, teme |
|            9 |     1996 | 2024-04-20 | SINNERS         | W   | 0.613      | 0.371        | 0.058 (0.013)    | 0.744 (0.169)    | 0 (0.000) |    16.72 | HENU, myltsi, podi, S1rva, teme |
|            8 |     2051 | 2024-04-19 | Viperio         | L   | 0.605      | -            | -                | -                | -         |   -13.11 | HENU, myltsi, podi, S1rva, teme |
|            7 |     2099 | 2024-04-18 | MOUZ NXT        | L   | 0.599      | -            | -                | -                | -         |    -3.05 | HENU, myltsi, podi, S1rva, teme |
|            6 |     2161 | 2024-04-16 | 1WIN            | L   | 0.586      | -            | -                | -                | -         |    -5.25 | HENU, myltsi, podi, S1rva, teme |
|            5 |     2180 | 2024-04-15 | Sampi           | W   | 0.580      | 0.371        | 0.045 (0.010)    | 0.975 (0.209)    | 0 (0.000) |    13.48 | HENU, myltsi, podi, S1rva, teme |
|            4 |     2183 | 2024-04-15 | Viperio         | W   | 0.579      | 0.143        | 0.002 (0.000)    | 0.049 (0.004)    | 0 (0.000) |     5.71 | HENU, myltsi, podi, S1rva, teme |
|            3 |     2256 | 2024-04-11 | Secret          | W   | 0.552      | 0.371        | 0.000 (0.000)    | 0.085 (0.017)    | 0 (0.000) |     4.05 | HENU, myltsi, podi, S1rva, teme |
|            2 |     3329 | 2024-02-24 | HAVU            | W   | 0.242      | 0.306        | 0.002 (0.000)    | 0.202 (0.015)    | 1 (0.242) |     3.63 | HENU, myltsi, podi, S1rva, teme |
|            1 |     3351 | 2024-02-24 | ex-sYnck        | W   | 0.239      | 0.306        | 0.000 (0.000)    | 0.027 (0.002)    | 1 (0.239) |     1.33 | HENU, myltsi, podi, S1rva, teme |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,055.09)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-05 |      0.714 | $1,608.00      | $1,147.53       |
| 2024-02-24 |      0.242 | $3,748.00      | $907.56         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
