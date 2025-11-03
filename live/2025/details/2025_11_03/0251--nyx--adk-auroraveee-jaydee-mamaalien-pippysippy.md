### Roster Details<br />
Team Name: NYX<br />
Roster: ADK, AuroraVeee, jaydee, MamaAlien, PippySippy<br />
Global Rank: [251](../../standings_global_2025_11_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_11_03.md)<br />
Regional Rank: [79]( ../../standings_americas_2025_11_03.md)<br />
<br />
Final Rank Value:  481.6<br />
<br />
Final Rank Value (481.6) = Starting Rank Value (498.8) + Head To Head Adjustments (-17.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.201[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.053<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 498.8
- 400 + ( ( 0.053 - 0.000 ) / ( 0.853 - 0.000 ) ) * 1600 = 498.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1589 | 2025-09-11 | anything else   | L   | 0.849      | -            | -                | -                | -         |   -12.60 | ADK, AuroraVeee, jaydee, MamaAlien, PippySippy |
|            4 |     1641 | 2025-09-10 | ex-Chicken Coop | W   | 0.842      | 0.363        | 0.003 (0.001)    | 0.315 (0.096)    | 0 (0.000) |    20.71 | ADK, AuroraVeee, jaydee, MamaAlien, PippySippy |
|            3 |     1743 | 2025-09-08 | FULL SEND       | L   | 0.829      | -            | -                | -                | -         |    -7.64 | ADK, AuroraVeee, jaydee, MamaAlien, PippySippy |
|            2 |     2129 | 2025-08-21 | Little Bocks    | L   | 0.709      | -            | -                | -                | -         |   -10.64 | ADK, AuroraVeee, jaydee, MamaAlien, PippySippy |
|            1 |     2154 | 2025-08-20 | Lotus fe        | L   | 0.702      | -            | -                | -                | -         |    -6.98 | ADK, AuroraVeee, jaydee, MamaAlien, PippySippy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($619,318.60)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
