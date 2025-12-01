### Roster Details<br />
Team Name: NYX<br />
Roster: ADK, AuroraVeee, jaydee, MamaAlien, PippySippy<br />
Global Rank: [274](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_12_01.md)<br />
Regional Rank: [81]( ../../standings_americas_2025_12_01.md)<br />
<br />
Final Rank Value:  469.2<br />
<br />
Final Rank Value (469.2) = Starting Rank Value (496.0) + Head To Head Adjustments (-26.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.195[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.050<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 496.0
- 400 + ( ( 0.050 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 496.0


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
|            7 |     1015 | 2025-10-25 | OverKnight    | L   | 0.955      | -            | -                | -                | -         |    -6.44 | ADK, jaydee, MamaAlien, Noccturnal, PippySippy |
|            6 |     1132 | 2025-10-23 | Nocturnal     | L   | 0.942      | -            | -                | -                | -         |    -9.22 | ADK, AuroraVeee, jaydee, MamaAlien, PippySippy |
|            5 |     2610 | 2025-09-11 | anything else | L   | 0.662      | -            | -                | -                | -         |    -9.89 | ADK, AuroraVeee, jaydee, MamaAlien, PippySippy |
|            4 |     2662 | 2025-09-10 | Phoenix       | W   | 0.655      | 0.363        | 0.003 (0.001)    | 0.282 (0.067)    | 0 (0.000) |    16.54 | ADK, AuroraVeee, jaydee, MamaAlien, PippySippy |
|            3 |     2764 | 2025-09-08 | OverKnight    | L   | 0.642      | -            | -                | -                | -         |    -5.13 | ADK, AuroraVeee, jaydee, MamaAlien, PippySippy |
|            2 |     3150 | 2025-08-21 | Little Bocks  | L   | 0.522      | -            | -                | -                | -         |    -7.70 | ADK, AuroraVeee, jaydee, MamaAlien, PippySippy |
|            1 |     3175 | 2025-08-20 | Lotus fe      | L   | 0.515      | -            | -                | -                | -         |    -4.95 | ADK, AuroraVeee, jaydee, MamaAlien, PippySippy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
