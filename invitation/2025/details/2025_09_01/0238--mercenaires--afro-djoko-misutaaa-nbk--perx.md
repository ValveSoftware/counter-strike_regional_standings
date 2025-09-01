### Roster Details<br />
Team Name: Mercenaires<br />
Roster: afro, Djoko, misutaaa, NBK-, PerX<br />
Global Rank: [238](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_09_01.md)<br />
Regional Rank: [118]( ../../standings_europe_2025_09_01.md)<br />
<br />
Final Rank Value:  518.3<br />
<br />
Final Rank Value (518.3) = Starting Rank Value (515.8) + Head To Head Adjustments (2.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.237[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.060<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 515.8
- 400 + ( ( 0.060 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 515.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     3212 | 2025-03-28 | NOVAQ      | L   | 0.152      | -            | -                | -                | -         |    -0.45 | afro, Djoko, misutaaa, NBK-, PerX |
|            5 |     3285 | 2025-03-27 | Partizan   | L   | 0.145      | -            | -                | -                | -         |    -0.33 | afro, Djoko, misutaaa, NBK-, PerX |
|            4 |     3619 | 2025-03-15 | AMKAL      | L   | 0.069      | -            | -                | -                | -         |    -0.47 | afro, Djoko, misutaaa, NBK-, PerX |
|            3 |     3620 | 2025-03-15 | TNL        | W   | 0.068      | 0.624        | 0.142 (0.006)    | 1.000 (0.043)    | 0 (0.000) |     2.08 | afro, Djoko, misutaaa, NBK-, PerX |
|            2 |     3626 | 2025-03-15 | GhoulsW    | W   | 0.067      | 0.624        | 0.000 (0.000)    | 0.016 (0.001)    | 0 (0.000) |     0.96 | afro, Djoko, misutaaa, NBK-, PerX |
|            1 |     3640 | 2025-03-15 | Lazer Cats | W   | 0.066      | 0.624        | 0.000 (0.000)    | 0.006 (0.000)    | 0 (0.000) |     0.72 | afro, Djoko, misutaaa, NBK-, PerX |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
