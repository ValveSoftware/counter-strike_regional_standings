### Roster Details<br />
Team Name: XDM<br />
Roster: darkk, Kungao, r1verLaKe, Shad0w, taidao<br />
Global Rank: [322](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_06_01.md)<br />
Regional Rank: [42]( ../../standings_asia_2026_06_01.md)<br />
<br />
Final Rank Value:  522.1<br />
<br />
Final Rank Value (522.1) = Starting Rank Value (491.6) + Head To Head Adjustments (30.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.184[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.048<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 491.6
- 400 + ( ( 0.048 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 491.6


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
|            6 |     2111 | 2026-04-02 | Rare Atom  | L   | 0.798      | -            | -                | -                | -         |    -1.08 | darkk, Kungao, r1verLaKe, Shad0w, taidao |
|            5 |     2199 | 2026-04-01 | The Huns   | L   | 0.791      | -            | -                | -                | -         |    -0.73 | darkk, Kungao, r1verLaKe, Shad0w, taidao |
|            4 |     2446 | 2026-03-29 | Just Swing | W   | 0.771      | 0.320        | 0.002 (0.000)    | 0.296 (0.073)    | 0 (0.000) |    20.16 | darkk, Kungao, r1verLaKe, Shad0w, taidao |
|            3 |     2448 | 2026-03-28 | Unitronics | W   | 0.771      | 0.320        | 0.000 (0.000)    | 0.033 (0.008)    | 0 (0.000) |    13.23 | darkk, Kungao, r1verLaKe, Shad0w, taidao |
|            2 |     2530 | 2026-03-27 | SemperFi   | L   | 0.763      | -            | -                | -                | -         |    -0.84 | darkk, Kungao, r1verLaKe, Shad0w, taidao |
|            1 |     5566 | 2026-01-17 | The Huns   | L   | 0.300      | -            | -                | -                | -         |    -0.18 | darkk, Kungao, r1verLaKe, Shad0w, taidao |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
