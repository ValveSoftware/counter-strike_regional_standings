### Roster Details<br />
Team Name: LE-LUX<br />
Roster: biebs, delkud, luffy, R3XY<br />
Global Rank: [337](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_04_06.md)<br />
Regional Rank: [42]( ../../standings_asia_2026_04_06.md)<br />
<br />
Final Rank Value:  476.6<br />
<br />
Final Rank Value (476.6) = Starting Rank Value (479.9) + Head To Head Adjustments (-3.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.162[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.041<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 479.9
- 400 + ( ( 0.041 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 479.9


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
|            6 |     2206 | 2026-02-21 | Vantage         | L   | 0.906      | -            | -                | -                | -         |   -13.77 | biebs, delkud, luffy, R3XY, Val |
|            5 |     2269 | 2026-02-19 | LITE            | W   | 0.897      | 0.317        | 0.000 (0.000)    | 0.048 (0.014)    | 0 (0.000) |    18.30 | biebs, delkud, luffy, R3XY, Val |
|            4 |     2369 | 2026-02-18 | Vantage         | L   | 0.885      | -            | -                | -                | -         |   -13.51 | biebs, delkud, luffy, R3XY, Val |
|            3 |     3018 | 2026-02-01 | Arcade          | L   | 0.772      | -            | -                | -                | -         |    -2.20 | biebs, delkud, luffy, R3XY, rev |
|            2 |     3020 | 2026-01-31 | Shanghai Sharks | W   | 0.771      | 0.305        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     9.24 | biebs, delkud, luffy, R3XY, rev |
|            1 |     3023 | 2026-01-31 | Mindfreak       | L   | 0.770      | -            | -                | -                | -         |    -1.39 | biebs, delkud, luffy, R3XY, rev |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
