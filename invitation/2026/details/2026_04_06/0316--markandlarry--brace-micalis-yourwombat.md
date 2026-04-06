### Roster Details<br />
Team Name: MARKandLARRY<br />
Roster: BRACE, micalis, yourwombat<br />
Global Rank: [316](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_04_06.md)<br />
Regional Rank: [37]( ../../standings_asia_2026_04_06.md)<br />
<br />
Final Rank Value:  523.8<br />
<br />
Final Rank Value (523.8) = Starting Rank Value (481.8) + Head To Head Adjustments (42.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.162[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.042<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 481.8
- 400 + ( ( 0.042 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 481.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      643 | 2026-03-24 | Mindfreak | L   | 1.000      | -            | -                | -                | -         |    -2.54 | BRACE, micalis, Roflko, yourwombat, zeph |
|            4 |      719 | 2026-03-23 | Vantage   | W   | 1.000      | 0.278        | 0.000 (0.000)    | 0.031 (0.009)    | 0 (0.000) |    14.67 | BRACE, micalis, sav, yourwombat, zeph    |
|            3 |      764 | 2026-03-22 | BBBMBCBS  | W   | 1.000      | 0.278        | 0.000 (0.000)    | 0.119 (0.033)    | 0 (0.000) |    12.81 | BRACE, micalis, Roflko, yourwombat, zeph |
|            2 |      821 | 2026-03-21 | Mindfreak | L   | 1.000      | -            | -                | -                | -         |    -2.08 | BRACE, micalis, Roflko, sav, yourwombat  |
|            1 |      885 | 2026-03-20 | LITE      | W   | 1.000      | 0.278        | 0.000 (0.000)    | 0.048 (0.013)    | 0 (0.000) |    19.13 | BRACE, micalis, Roflko, yourwombat, zeph |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
