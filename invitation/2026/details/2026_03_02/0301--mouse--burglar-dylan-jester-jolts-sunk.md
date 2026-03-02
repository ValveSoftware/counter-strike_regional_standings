### Roster Details<br />
Team Name: mouse<br />
Roster: Burglar, DYLAN, Jester, Jolts, Sunk<br />
Global Rank: [301](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_02.md)<br />
Regional Rank: [84]( ../../standings_americas_2026_03_02.md)<br />
<br />
Final Rank Value:  508.1<br />
<br />
Final Rank Value (508.1) = Starting Rank Value (491.4) + Head To Head Adjustments (16.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.188[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.048<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 491.4
- 400 + ( ( 0.048 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 491.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      611 | 2026-02-16 | LAG        | L   | 1.000      | -            | -                | -                | -         |    -4.33 | Burglar, DYLAN, Jester, Jolts, Sunk |
|            6 |      864 | 2026-02-10 | BOSS       | L   | 1.000      | -            | -                | -                | -         |    -4.77 | Burglar, DYLAN, Jester, Jolts, Sunk |
|            5 |      875 | 2026-02-10 | Passion UA | L   | 1.000      | -            | -                | -                | -         |    -0.38 | Burglar, duhpe, DYLAN, Jester, Sunk |
|            4 |      918 | 2026-02-08 | F5         | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.086 (0.012)    | 0 (0.000) |    18.70 | DYLAN, Jester, Jolts, milo, Sunk    |
|            3 |      982 | 2026-02-06 | regain     | L   | 1.000      | -            | -                | -                | -         |    -7.42 | Burglar, DYLAN, Jester, Jolts, Sunk |
|            2 |     1015 | 2026-02-05 | Mythic     | W   | 1.000      | 0.333        | 0.001 (0.000)    | 0.112 (0.037)    | 0 (0.000) |    22.39 | Burglar, DYLAN, Jester, Jolts, Sunk |
|            1 |     1091 | 2026-02-02 | regain     | L   | 1.000      | -            | -                | -                | -         |    -7.52 | Burglar, DYLAN, Jester, Jolts, Sunk |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
