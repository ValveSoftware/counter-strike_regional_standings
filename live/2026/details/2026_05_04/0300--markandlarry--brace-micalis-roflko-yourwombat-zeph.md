### Roster Details<br />
Team Name: MARKandLARRY<br />
Roster: BRACE, micalis, Roflko, yourwombat, zeph<br />
Global Rank: [300](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_05_04.md)<br />
Regional Rank: [40]( ../../standings_asia_2026_05_04.md)<br />
<br />
Final Rank Value:  555.9<br />
<br />
Final Rank Value (555.9) = Starting Rank Value (512.7) + Head To Head Adjustments (43.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.221[<sup>2</sup>](#table1)
- Opponent Network: 0.021[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.061<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 512.7
- 400 + ( ( 0.061 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 512.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      104 | 2026-04-30 | FURY        | L   | 1.000      | -            | -                | -                | -         |   -17.58 | BRACE, micalis, Roflko, yourwombat, zeph |
|            7 |      146 | 2026-04-29 | Ground Zero | L   | 1.000      | -            | -                | -                | -         |    -3.35 | BRACE, micalis, Roflko, yourwombat, zeph |
|            6 |      221 | 2026-04-27 | Rooster     | W   | 1.000      | 0.278        | 0.010 (0.003)    | 0.426 (0.118)    | 0 (0.000) |    25.72 | BRACE, micalis, Roflko, yourwombat, zeph |
|            5 |     1731 | 2026-03-24 | Mindfreak   | L   | 0.925      | -            | -                | -                | -         |    -4.23 | BRACE, micalis, Roflko, yourwombat, zeph |
|            4 |     1809 | 2026-03-23 | Skele       | W   | 0.919      | 0.278        | 0.000 (0.000)    | 0.083 (0.021)    | 0 (0.000) |    15.99 | BRACE, micalis, sav, yourwombat, zeph    |
|            3 |     1856 | 2026-03-22 | BBBMBCBS    | W   | 0.912      | 0.278        | 0.000 (0.000)    | 0.133 (0.034)    | 0 (0.000) |    12.74 | BRACE, micalis, Roflko, yourwombat, zeph |
|            2 |     1915 | 2026-03-21 | Mindfreak   | L   | 0.905      | -            | -                | -                | -         |    -3.52 | BRACE, micalis, Roflko, sav, yourwombat  |
|            1 |     1981 | 2026-03-20 | Ding Cuts   | W   | 0.898      | 0.278        | 0.002 (0.000)    | 0.165 (0.041)    | 0 (0.000) |    17.45 | BRACE, micalis, Roflko, yourwombat, zeph |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
