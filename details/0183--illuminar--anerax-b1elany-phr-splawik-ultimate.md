### Roster Details<br />
Team Name: Illuminar<br />
Roster: ANeraX, b1elany, phr, splawik, ultimate<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [183](../standings_global.md)<br />
Regional Rank: [116]( ../standings_europe.md)<br />
Final Rank Value:  591.2<br />
<br />
Final Rank Value (591.2) = Starting Rank Value (530.1) + Head To Head Adjustments (61.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.226[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.061<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 530.1
- 400 + ( ( 0.061 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 530.1


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
|           10 |      933 | 2024-06-01 | WOPA          | W   | 0.892      | 0.143        | 0.001 (0.000)    | 0.152 (0.019)    | 0 (0.000) |    15.98 | ANeraX, b1elany, phr, splawik, ultimate |
|            9 |     1847 | 2024-04-27 | EYEBALLERS    | L   | 0.659      | -            | -                | -                | -         |    -2.55 | ANeraX, Furlan, keis, phr, ultimate     |
|            8 |     1870 | 2024-04-26 | Zero Tenacity | L   | 0.652      | -            | -                | -                | -         |    -1.37 | ANeraX, Furlan, keis, phr, ultimate     |
|            7 |     1935 | 2024-04-23 | Nexus         | W   | 0.632      | 0.435        | 0.011 (0.003)    | 0.432 (0.119)    | 0 (0.000) |    17.06 | ANeraX, Furlan, keis, phr, ultimate     |
|            6 |     1960 | 2024-04-21 | BLEED         | L   | 0.621      | -            | -                | -                | -         |    -0.70 | ANeraX, Furlan, keis, phr, ultimate     |
|            5 |     1999 | 2024-04-20 | Viperio       | W   | 0.612      | 0.143        | 0.002 (0.000)    | 0.049 (0.004)    | 0 (0.000) |    12.53 | ANeraX, Furlan, keis, phr, ultimate     |
|            4 |     2065 | 2024-04-18 | Portugal      | W   | 0.601      | 0.143        | 0.006 (0.000)    | 0.162 (0.014)    | 0 (0.000) |    14.61 | ANeraX, Furlan, keis, phr, ultimate     |
|            3 |     2119 | 2024-04-17 | Secret        | W   | 0.594      | 0.143        | 0.000 (0.000)    | 0.085 (0.007)    | 0 (0.000) |    10.74 | ANeraX, Furlan, keis, phr, ultimate     |
|            2 |     2528 | 2024-04-03 | PGE Turow     | L   | 0.499      | -            | -                | -                | -         |    -4.41 | ANeraX, Furlan, keis, phr, ultimate     |
|            1 |     2569 | 2024-04-02 | UNiTY         | L   | 0.492      | -            | -                | -                | -         |    -0.79 | ANeraX, Furlan, keis, phr, ultimate     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
