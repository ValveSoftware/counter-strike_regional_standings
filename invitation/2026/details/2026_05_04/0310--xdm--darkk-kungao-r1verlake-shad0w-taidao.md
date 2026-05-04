### Roster Details<br />
Team Name: XDM<br />
Roster: darkk, Kungao, r1verLaKe, Shad0w, taidao<br />
Global Rank: [310](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_05_04.md)<br />
Regional Rank: [41]( ../../standings_asia_2026_05_04.md)<br />
<br />
Final Rank Value:  533.6<br />
<br />
Final Rank Value (533.6) = Starting Rank Value (496.8) + Head To Head Adjustments (36.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.197[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.052<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 496.8
- 400 + ( ( 0.052 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 496.8


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
|            6 |     1125 | 2026-04-02 | Rare Atom  | L   | 0.984      | -            | -                | -                | -         |    -1.31 | darkk, Kungao, r1verLaKe, Shad0w, taidao |
|            5 |     1213 | 2026-04-01 | The Huns   | L   | 0.978      | -            | -                | -                | -         |    -1.18 | darkk, Kungao, r1verLaKe, Shad0w, taidao |
|            4 |     1460 | 2026-03-29 | Just Swing | W   | 0.958      | 0.320        | 0.003 (0.001)    | 0.340 (0.104)    | 0 (0.000) |    24.84 | darkk, Kungao, r1verLaKe, Shad0w, taidao |
|            3 |     1462 | 2026-03-28 | Unitronics | W   | 0.957      | 0.320        | 0.000 (0.000)    | 0.034 (0.010)    | 0 (0.000) |    15.76 | darkk, Kungao, r1verLaKe, Shad0w, taidao |
|            2 |     1544 | 2026-03-27 | SemperFi   | L   | 0.950      | -            | -                | -                | -         |    -0.87 | darkk, Kungao, r1verLaKe, Shad0w, taidao |
|            1 |     4580 | 2026-01-17 | The Huns   | L   | 0.486      | -            | -                | -                | -         |    -0.40 | darkk, Kungao, r1verLaKe, Shad0w, taidao |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
