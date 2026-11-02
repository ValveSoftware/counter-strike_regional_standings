### Roster Details<br />
Team Name: Coalesce<br />
Roster: Flicky, onder, sen1ar<br />
Global Rank: [359](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_11_02.md)<br />
Regional Rank: [234]( ../../standings_europe_2026_11_02.md)<br />
<br />
Final Rank Value:  438.6<br />
<br />
Final Rank Value (438.6) = Starting Rank Value (433.1) + Head To Head Adjustments (5.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.070[<sup>2</sup>](#table1)

The average of these factors is 0.018<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 433.1
- 400 + ( ( 0.018 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 433.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     3151 | 2026-08-20 | Ryvex       | L   | 0.707      | -            | -                | -                | -         |    -2.85 | BoZZo, cryths, Flicky, onder, sen1ar    |
|            4 |     4466 | 2026-06-29 | SINQU       | L   | 0.359      | -            | -                | -                | -         |    -1.33 | D1ntrIXxX, Fizzy, Flicky, onder, sen1ar |
|            3 |     4489 | 2026-06-28 | Aimhaus     | W   | 0.353      | 0.303        | 0.000 (0.000)    | 0.011 (0.001)    | 1 (0.353) |     5.27 | D1ntrIXxX, Fizzy, Flicky, onder, sen1ar |
|            2 |     4492 | 2026-06-28 | Leo         | L   | 0.352      | -            | -                | -                | -         |    -0.56 | D1ntrIXxX, Fizzy, Flicky, onder, sen1ar |
|            1 |     4496 | 2026-06-28 | GAMEHARMONY | W   | 0.352      | 0.303        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.352) |     5.00 | D1ntrIXxX, Fizzy, Flicky, onder, sen1ar |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
