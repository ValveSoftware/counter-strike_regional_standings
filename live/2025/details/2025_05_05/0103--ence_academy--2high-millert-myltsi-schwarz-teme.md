### Roster Details<br />
Team Name: ENCE Academy<br />
Roster: 2high, millert, myltsi, Schwarz, teme<br />
Global Rank: [103](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [64]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  723.8<br />
<br />
Final Rank Value (723.8) = Starting Rank Value (700.0) + Head To Head Adjustments (23.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.344[<sup>1</sup>](#table2)
- Bounty Collected: 0.233[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.076[<sup>2</sup>](#table1)

The average of these factors is 0.165<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 700.0
- 400 + ( ( 0.165 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 700.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |       78 | 2025-04-27 | HAVU            | W   | 1.000      | 0.308        | 0.004 (0.001)    | 0.051 (0.016)    | 0 (0.000) |    11.86 | 2high, millert, myltsi, Schwarz, teme |
|           11 |      115 | 2025-04-26 | HAVU            | W   | 1.000      | 0.308        | 0.004 (0.001)    | 0.051 (0.016)    | 0 (0.000) |    12.26 | 2high, millert, myltsi, Schwarz, teme |
|           10 |      128 | 2025-04-25 | ex-UHKA         | W   | 1.000      | 0.308        | 0.002 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     8.40 | 2high, millert, myltsi, Schwarz, teme |
|            9 |     1728 | 2025-02-22 | JANO            | L   | 0.720      | -            | -                | -                | -         |   -10.15 | 2high, millert, myltsi, Schwarz, teme |
|            8 |     1735 | 2025-02-21 | HAVU            | W   | 0.715      | 0.304        | 0.004 (0.001)    | 0.051 (0.011)    | 1 (0.715) |     9.00 | 2high, millert, myltsi, Schwarz, teme |
|            7 |     2475 | 2024-12-24 | WOPA            | L   | 0.319      | -            | -                | -                | -         |    -5.24 | 2high, millert, myltsi, Schwarz, teme |
|            6 |     2479 | 2024-12-23 | kONO            | L   | 0.312      | -            | -                | -                | -         |    -5.68 | 2high, millert, myltsi, Schwarz, teme |
|            5 |     2529 | 2024-12-19 | ESC             | W   | 0.285      | 0.333        | 0.000 (0.000)    | 0.104 (0.010)    | 0 (0.000) |     2.29 | 2high, millert, myltsi, Schwarz, teme |
|            4 |     2538 | 2024-12-18 | ALASKA          | W   | 0.279      | 0.333        | 0.012 (0.001)    | 0.278 (0.026)    | 0 (0.000) |     5.24 | 2high, millert, myltsi, Schwarz, teme |
|            3 |     2843 | 2024-12-02 | Illuminar       | L   | 0.174      | -            | -                | -                | -         |    -3.38 | 2high, millert, myltsi, Schwarz, teme |
|            2 |     2920 | 2024-11-29 | Astralis Talent | W   | 0.154      | 0.333        | 0.000 (0.000)    | 0.105 (0.005)    | 0 (0.000) |     1.82 | 2high, millert, myltsi, Schwarz, teme |
|            1 |     2938 | 2024-11-28 | Dark Cloud      | L   | 0.146      | -            | -                | -                | -         |    -2.64 | 2high, millert, myltsi, Schwarz, teme |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,472.74)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-04-27 |      1.000 | $3,403.00      | $3,403.00       |
| 2025-02-22 |      0.720 | $1,033.00      | $743.90         |
| 2024-12-25 |      0.326 | $1,000.00      | $325.84         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
