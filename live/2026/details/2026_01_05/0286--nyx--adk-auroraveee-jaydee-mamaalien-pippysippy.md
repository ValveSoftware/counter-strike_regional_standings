### Roster Details<br />
Team Name: NYX<br />
Roster: ADK, AuroraVeee, jaydee, MamaAlien, PippySippy<br />
Global Rank: [286](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_01_05.md)<br />
Regional Rank: [83]( ../../standings_americas_2026_01_05.md)<br />
<br />
Final Rank Value:  476.9<br />
<br />
Final Rank Value (476.9) = Starting Rank Value (495.0) + Head To Head Adjustments (-18.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.187[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.048<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 495.0
- 400 + ( ( 0.048 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 495.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     1575 | 2025-10-25 | OverKnight    | L   | 0.722      | -            | -                | -                | -         |    -5.08 | ADK, jaydee, MamaAlien, Noccturnal, PippySippy |
|            6 |     1692 | 2025-10-23 | Nocturnal     | L   | 0.709      | -            | -                | -                | -         |    -6.83 | ADK, AuroraVeee, jaydee, MamaAlien, PippySippy |
|            5 |     3170 | 2025-09-11 | anything else | L   | 0.429      | -            | -                | -                | -         |    -6.49 | ADK, AuroraVeee, jaydee, MamaAlien, PippySippy |
|            4 |     3222 | 2025-09-10 | Phoenix       | W   | 0.422      | 0.363        | 0.003 (0.000)    | 0.287 (0.044)    | 0 (0.000) |    10.39 | ADK, AuroraVeee, jaydee, MamaAlien, PippySippy |
|            3 |     3324 | 2025-09-08 | OverKnight    | L   | 0.409      | -            | -                | -                | -         |    -3.33 | ADK, AuroraVeee, jaydee, MamaAlien, PippySippy |
|            2 |     3710 | 2025-08-21 | Little Bocks  | L   | 0.289      | -            | -                | -                | -         |    -4.15 | ADK, AuroraVeee, jaydee, MamaAlien, PippySippy |
|            1 |     3735 | 2025-08-20 | Lotus fe      | L   | 0.282      | -            | -                | -                | -         |    -2.66 | ADK, AuroraVeee, jaydee, MamaAlien, PippySippy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
