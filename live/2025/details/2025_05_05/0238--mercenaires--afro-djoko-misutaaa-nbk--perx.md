### Roster Details<br />
Team Name: Mercenaires<br />
Roster: afro, Djoko, misutaaa, NBK-, PerX<br />
Global Rank: [238](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [133]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  538.6<br />
<br />
Final Rank Value (538.6) = Starting Rank Value (511.4) + Head To Head Adjustments (27.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.232[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.061<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 511.4
- 400 + ( ( 0.061 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 511.4


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
|            6 |      762 | 2025-03-28 | NOVAQ      | L   | 0.945      | -            | -                | -                | -         |    -9.63 | afro, Djoko, misutaaa, NBK-, PerX |
|            5 |      835 | 2025-03-27 | Partizan   | L   | 0.938      | -            | -                | -                | -         |    -4.15 | afro, Djoko, misutaaa, NBK-, PerX |
|            4 |     1064 | 2025-03-15 | AMKAL      | L   | 0.862      | -            | -                | -                | -         |    -8.07 | afro, Djoko, misutaaa, NBK-, PerX |
|            3 |     1065 | 2025-03-15 | TNL        | W   | 0.861      | 0.143        | 0.040 (0.005)    | 0.897 (0.110)    | 0 (0.000) |    24.62 | afro, Djoko, misutaaa, NBK-, PerX |
|            2 |     1070 | 2025-03-15 | GhoulsW    | W   | 0.861      | 0.143        | 0.000 (0.000)    | 0.138 (0.017)    | 0 (0.000) |    12.45 | afro, Djoko, misutaaa, NBK-, PerX |
|            1 |     1083 | 2025-03-15 | Lazer Cats | W   | 0.860      | 0.143        | 0.000 (0.000)    | 0.087 (0.011)    | 0 (0.000) |    11.97 | afro, Djoko, misutaaa, NBK-, PerX |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
