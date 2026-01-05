### Roster Details<br />
Team Name: Anonymo<br />
Roster: AdrieN, chudy, darchevile, Melavi, Nami<br />
Global Rank: [259](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_01_05.md)<br />
Regional Rank: [156]( ../../standings_europe_2026_01_05.md)<br />
<br />
Final Rank Value:  534.2<br />
<br />
Final Rank Value (534.2) = Starting Rank Value (512.1) + Head To Head Adjustments (22.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.198[<sup>2</sup>](#table1)
- Opponent Network: 0.028[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.057<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 512.1
- 400 + ( ( 0.057 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 512.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      197 | 2025-12-17 | Nexus            | L   | 1.000      | -            | -                | -                | -         |    -3.68 | AdrieN, chudy, darchevile, Melavi, Nami |
|            7 |      205 | 2025-12-16 | Lazer Cats       | L   | 1.000      | -            | -                | -                | -         |    -4.21 | AdrieN, chudy, darchevile, Melavi, Nami |
|            6 |     2723 | 2025-09-25 | Nexus            | W   | 0.521      | 0.435        | 0.002 (0.000)    | 0.796 (0.180)    | 0 (0.000) |    15.93 | AdrieN, chudy, darchevile, Melavi, Nami |
|            5 |     2812 | 2025-09-22 | Alliance         | L   | 0.498      | -            | -                | -                | -         |    -0.16 | AdrieN, chudy, darchevile, Melavi, Nami |
|            4 |     3011 | 2025-09-15 | AMKAL            | W   | 0.453      | 0.384        | 0.002 (0.000)    | 0.506 (0.088)    | 0 (0.000) |    12.55 | AdrieN, chudy, darchevile, Melavi, Nami |
|            3 |     3104 | 2025-09-13 | SENZA            | W   | 0.440      | 0.384        | 0.000 (0.000)    | 0.050 (0.008)    | 0 (0.000) |     9.73 | AdrieN, chudy, darchevile, Melavi, Nami |
|            2 |     3147 | 2025-09-12 | Wildcard Academy | L   | 0.433      | -            | -                | -                | -         |    -6.53 | chudy, darchevile, Melavi, Nami, yvro   |
|            1 |     4474 | 2025-07-20 | xdasdf           | L   | 0.073      | -            | -                | -                | -         |    -1.51 | AdrieN, chudy, hfah, Nami, yvro         |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
