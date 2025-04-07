### Roster Details<br />
Team Name: Mercenaires<br />
Roster: afro, Djoko, misutaaa, NBK-, PerX<br />
Global Rank: [243](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [138]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  522.8<br />
<br />
Final Rank Value (522.8) = Starting Rank Value (488.3) + Head To Head Adjustments (34.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.181[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.048<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 488.3
- 400 + ( ( 0.048 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 488.3


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
|            6 |      243 | 2025-03-28 | Novaq      | L   | 1.000      | -            | -                | -                | -         |    -6.71 | afro, Djoko, misutaaa, NBK-, PerX |
|            5 |      310 | 2025-03-27 | Partizan   | L   | 1.000      | -            | -                | -                | -         |    -3.73 | afro, Djoko, misutaaa, NBK-, PerX |
|            4 |      457 | 2025-03-15 | AMKAL      | L   | 1.000      | -            | -                | -                | -         |    -7.15 | afro, Djoko, misutaaa, NBK-, PerX |
|            3 |      458 | 2025-03-15 | TNL        | W   | 1.000      | 0.143        | 0.002 (0.000)    | 0.518 (0.074)    | 0 (0.000) |    21.46 | afro, Djoko, misutaaa, NBK-, PerX |
|            2 |      463 | 2025-03-15 | GhoulsW    | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.161 (0.023)    | 0 (0.000) |    15.39 | afro, Djoko, misutaaa, NBK-, PerX |
|            1 |      476 | 2025-03-15 | Lazer Cats | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.106 (0.015)    | 0 (0.000) |    15.17 | afro, Djoko, misutaaa, NBK-, PerX |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
