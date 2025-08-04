### Roster Details<br />
Team Name: Illuminar<br />
Roster: AxEcHo, discoStar, Furlan, Pelle, SpavaQu<br />
Global Rank: [236](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [121]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  529.4<br />
<br />
Final Rank Value (529.4) = Starting Rank Value (520.5) + Head To Head Adjustments (8.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.241[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.064<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 520.5
- 400 + ( ( 0.064 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 520.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1095 | 2025-05-21 | Fire Flux  | L   | 0.700      | -            | -                | -                | -         |    -4.31 | AxEcHo, discoStar, Furlan, Pelle, SpavaQu |
|            4 |     1182 | 2025-05-17 | CYBERSHOKE | L   | 0.673      | -            | -                | -                | -         |    -2.13 | AxEcHo, discoStar, Furlan, Pelle, SpavaQu |
|            3 |     1286 | 2025-05-13 | Sangal     | L   | 0.647      | -            | -                | -                | -         |    -1.83 | AxEcHo, discoStar, Furlan, Pelle, SpavaQu |
|            2 |     1336 | 2025-05-11 | SINNERS    | W   | 0.635      | 0.435        | 0.026 (0.007)    | 0.481 (0.133)    | 0 (0.000) |    17.49 | AxEcHo, discoStar, Furlan, Pelle, SpavaQu |
|            1 |     2750 | 2025-03-22 | TNL        | L   | 0.300      | -            | -                | -                | -         |    -0.30 | AxEcHo, Furlan, next1me, Pelle, SpavaQu   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($440,967.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
