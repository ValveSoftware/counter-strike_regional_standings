### Roster Details<br />
Team Name: Illuminar<br />
Roster: ANeraX, b1elany, phr, splawik, ultimate<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [185](../standings_global.md)<br />
Regional Rank: [117]( ../standings_europe.md)<br />
Final Rank Value:  580.2<br />
<br />
Final Rank Value (580.2) = Starting Rank Value (526.2) + Head To Head Adjustments (54.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.233[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.062<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 526.2
- 400 + ( ( 0.062 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 526.2


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
|           10 |     1221 | 2024-06-01 | WOPA          | W   | 0.844      | 0.143        | 0.002 (0.000)    | 0.143 (0.017)    | 0 (0.000) |    14.89 | ANeraX, b1elany, phr, splawik, ultimate |
|            9 |     2135 | 2024-04-27 | EYEBALLERS    | L   | 0.611      | -            | -                | -                | -         |    -2.71 | ANeraX, Furlan, keis, phr, ultimate     |
|            8 |     2158 | 2024-04-26 | Zero Tenacity | L   | 0.605      | -            | -                | -                | -         |    -1.29 | ANeraX, Furlan, keis, phr, ultimate     |
|            7 |     2223 | 2024-04-23 | Nexus         | W   | 0.585      | 0.435        | 0.018 (0.004)    | 0.480 (0.122)    | 0 (0.000) |    15.66 | ANeraX, Furlan, keis, phr, ultimate     |
|            6 |     2248 | 2024-04-21 | BLEED         | L   | 0.573      | -            | -                | -                | -         |    -0.90 | ANeraX, Furlan, keis, phr, ultimate     |
|            5 |     2287 | 2024-04-20 | Viperio       | W   | 0.565      | 0.143        | 0.002 (0.000)    | 0.045 (0.004)    | 0 (0.000) |    11.24 | ANeraX, Furlan, keis, phr, ultimate     |
|            4 |     2353 | 2024-04-18 | Portugal      | W   | 0.554      | 0.143        | 0.004 (0.000)    | 0.145 (0.011)    | 0 (0.000) |    12.90 | ANeraX, Furlan, keis, phr, ultimate     |
|            3 |     2407 | 2024-04-17 | Secret        | W   | 0.547      | 0.143        | 0.000 (0.000)    | 0.074 (0.006)    | 0 (0.000) |     9.52 | ANeraX, Furlan, keis, phr, ultimate     |
|            2 |     2816 | 2024-04-03 | PGE Turow     | L   | 0.452      | -            | -                | -                | -         |    -4.33 | ANeraX, Furlan, keis, phr, ultimate     |
|            1 |     2857 | 2024-04-02 | UNiTY         | L   | 0.445      | -            | -                | -                | -         |    -0.94 | ANeraX, Furlan, keis, phr, ultimate     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
