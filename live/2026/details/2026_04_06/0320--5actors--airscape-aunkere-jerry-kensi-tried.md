### Roster Details<br />
Team Name: 5Actors<br />
Roster: airscape, Aunkere, Jerry, KENSI, tried<br />
Global Rank: [320](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_06.md)<br />
Regional Rank: [195]( ../../standings_europe_2026_04_06.md)<br />
<br />
Final Rank Value:  511.7<br />
<br />
Final Rank Value (511.7) = Starting Rank Value (498.8) + Head To Head Adjustments (12.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.200[<sup>2</sup>](#table1)

The average of these factors is 0.051<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 498.8
- 400 + ( ( 0.051 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 498.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |       99 | 2026-04-03 | BET-M          | L   | 1.000      | -            | -                | -                | -         |    -0.40 | airscape, Aunkere, Jerry, KENSI, tried |
|            7 |      111 | 2026-04-03 | Void Sentinels | W   | 1.000      | 0.435        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |    10.95 | airscape, Aunkere, Jerry, KENSI, tried |
|            6 |      114 | 2026-04-03 | Nemiga         | L   | 1.000      | -            | -                | -                | -         |    -0.20 | airscape, Aunkere, Jerry, KENSI, tried |
|            5 |     1293 | 2026-03-10 | Nemiga         | L   | 1.000      | -            | -                | -                | -         |    -0.27 | airscape, Aunkere, Jerry, KENSI, tried |
|            4 |     1303 | 2026-03-10 | SPARTA         | W   | 1.000      | 0.371        | 0.000 (0.000)    | 0.056 (0.021)    | 1 (1.000) |    20.29 | airscape, Aunkere, Jerry, KENSI, tried |
|            3 |     1311 | 2026-03-10 | ARCRED         | L   | 1.000      | -            | -                | -                | -         |    -0.39 | airscape, Aunkere, Jerry, KENSI, tried |
|            2 |     1674 | 2026-03-03 | Younglings     | L   | 0.975      | -            | -                | -                | -         |   -16.80 | airscape, Aunkere, Jerry, KENSI, tried |
|            1 |     1699 | 2026-03-03 | SPARTA         | L   | 0.973      | -            | -                | -                | -         |    -0.30 | airscape, Aunkere, Jerry, KENSI, tried |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
