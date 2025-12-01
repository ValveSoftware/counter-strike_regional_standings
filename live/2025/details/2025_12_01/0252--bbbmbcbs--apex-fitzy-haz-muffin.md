### Roster Details<br />
Team Name: BBBMBCBS<br />
Roster: ApeX, Fitzy, HaZ, muffin<br />
Global Rank: [252](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_12_01.md)<br />
Regional Rank: [37]( ../../standings_asia_2025_12_01.md)<br />
<br />
Final Rank Value:  526.8<br />
<br />
Final Rank Value (526.8) = Starting Rank Value (534.1) + Head To Head Adjustments (-7.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.179[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.101[<sup>2</sup>](#table1)

The average of these factors is 0.070<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 534.1
- 400 + ( ( 0.070 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 534.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |       37 | 2025-11-29 | Underground | L   | 1.000      | -            | -                | -                | -         |    -9.37 | ApeX, Dirty, Fitzy, HaZ, muffin |
|            5 |       41 | 2025-11-29 | Rooster     | L   | 1.000      | -            | -                | -                | -         |    -5.68 | ApeX, Dirty, Fitzy, HaZ, muffin |
|            4 |       43 | 2025-11-28 | blingus     | W   | 1.000      | 0.279        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     9.80 | ApeX, Dirty, Fitzy, HaZ, muffin |
|            3 |     2041 | 2025-09-28 | Vantage     | L   | 0.771      | -            | -                | -                | -         |    -9.76 | ApeX, biebs, Fitzy, HaZ, muffin |
|            2 |     2045 | 2025-09-27 | Underground | W   | 0.770      | 0.302        | 0.001 (0.000)    | 0.072 (0.017)    | 0 (0.000) |    14.52 | ApeX, biebs, Fitzy, HaZ, muffin |
|            1 |     2049 | 2025-09-27 | Ground Zero | L   | 0.769      | -            | -                | -                | -         |    -6.76 | ApeX, biebs, Fitzy, HaZ, muffin |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
