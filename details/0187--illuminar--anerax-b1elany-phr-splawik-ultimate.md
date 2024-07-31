### Roster Details<br />
Team Name: Illuminar<br />
Roster: ANeraX, b1elany, phr, splawik, ultimate<br />
Global Rank: [187](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [119]( ../standings_europe.md)<br />
<br />
Final Rank Value:  573.5<br />
<br />
Final Rank Value (573.5) = Starting Rank Value (523.8) + Head To Head Adjustments (49.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.226[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.060<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 523.8
- 400 + ( ( 0.060 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 523.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     1463 | 2024-06-01 | WOPA          | W   | 0.797      | 0.143        | 0.001 (0.000)    | 0.127 (0.014)    | 0 (0.000) |    14.26 | ANeraX, b1elany, phr, splawik, ultimate |
|            9 |     2377 | 2024-04-27 | EYEBALLERS    | L   | 0.564      | -            | -                | -                | -         |    -2.36 | ANeraX, Furlan, keis, phr, ultimate     |
|            8 |     2400 | 2024-04-26 | Zero Tenacity | L   | 0.557      | -            | -                | -                | -         |    -1.09 | ANeraX, Furlan, keis, phr, ultimate     |
|            7 |     2465 | 2024-04-23 | Nexus         | W   | 0.538      | 0.435        | 0.014 (0.003)    | 0.465 (0.109)    | 0 (0.000) |    14.33 | ANeraX, Furlan, keis, phr, ultimate     |
|            6 |     2490 | 2024-04-21 | BLEED         | L   | 0.526      | -            | -                | -                | -         |    -0.93 | ANeraX, Furlan, keis, phr, ultimate     |
|            5 |     2529 | 2024-04-20 | Viperio       | W   | 0.518      | 0.143        | 0.002 (0.000)    | 0.038 (0.003)    | 0 (0.000) |    10.32 | ANeraX, Furlan, keis, phr, ultimate     |
|            4 |     2595 | 2024-04-18 | Portugal      | W   | 0.507      | 0.143        | 0.003 (0.000)    | 0.122 (0.009)    | 0 (0.000) |    11.58 | ANeraX, Furlan, keis, phr, ultimate     |
|            3 |     2649 | 2024-04-17 | Secret        | W   | 0.500      | 0.143        | 0.000 (0.000)    | 0.061 (0.004)    | 0 (0.000) |     8.58 | ANeraX, Furlan, keis, phr, ultimate     |
|            2 |     3058 | 2024-04-03 | PGE Turow     | L   | 0.405      | -            | -                | -                | -         |    -3.98 | ANeraX, Furlan, keis, phr, ultimate     |
|            1 |     3099 | 2024-04-02 | UNiTY         | L   | 0.398      | -            | -                | -                | -         |    -0.96 | ANeraX, Furlan, keis, phr, ultimate     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
