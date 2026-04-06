### Roster Details<br />
Team Name: XDM<br />
Roster: darkk, Kungao, r1verLaKe, Shad0w, taidao<br />
Global Rank: [304](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_04_06.md)<br />
Regional Rank: [36]( ../../standings_asia_2026_04_06.md)<br />
<br />
Final Rank Value:  535.6<br />
<br />
Final Rank Value (535.6) = Starting Rank Value (500.5) + Head To Head Adjustments (35.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.201[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.051<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 500.5
- 400 + ( ( 0.051 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 500.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      167 | 2026-04-02 | Rare Atom  | L   | 1.000      | -            | -                | -                | -         |    -1.15 | darkk, Kungao, r1verLaKe, Shad0w, taidao |
|            5 |      225 | 2026-04-01 | The Huns   | L   | 1.000      | -            | -                | -                | -         |    -0.98 | darkk, Kungao, r1verLaKe, Shad0w, taidao |
|            4 |      395 | 2026-03-29 | Just Swing | W   | 1.000      | 0.320        | 0.003 (0.001)    | 0.145 (0.047)    | 0 (0.000) |    23.60 | darkk, Kungao, r1verLaKe, Shad0w, taidao |
|            3 |      397 | 2026-03-28 | Unitronics | W   | 1.000      | 0.320        | 0.000 (0.000)    | 0.006 (0.002)    | 0 (0.000) |    14.67 | darkk, Kungao, r1verLaKe, Shad0w, taidao |
|            2 |      474 | 2026-03-27 | SemperFi   | L   | 1.000      | -            | -                | -                | -         |    -0.63 | darkk, Kungao, r1verLaKe, Shad0w, taidao |
|            1 |     3483 | 2026-01-17 | The Huns   | L   | 0.673      | -            | -                | -                | -         |    -0.42 | darkk, Kungao, r1verLaKe, Shad0w, taidao |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
