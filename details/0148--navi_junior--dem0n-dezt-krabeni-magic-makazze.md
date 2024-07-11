### Roster Details<br />
Team Name: NAVI Junior<br />
Roster: dem0n, dezt, Krabeni, Magic, makazze<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [148](../standings_global.md)<br />
Regional Rank: [96]( ../standings_europe.md)<br />
Final Rank Value:  724.0<br />
<br />
Final Rank Value (724.0) = Starting Rank Value (711.9) + Head To Head Adjustments (12.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.310[<sup>1</sup>](#table2)
- Bounty Collected: 0.267[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.148<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 711.9
- 400 + ( ( 0.148 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 711.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     2429 | 2024-03-30 | GL Academy     | L   | 0.512      | -            | -                | -                | -         |    -6.78 | dem0n, dezt, Krabeni, Magic, makazze     |
|            9 |     2438 | 2024-03-29 | Passion UA     | W   | 0.506      | 0.333        | 0.087 (0.015)    | 0.821 (0.138)    | 0 (0.000) |    13.03 | dem0n, dezt, Krabeni, Magic, makazze     |
|            8 |     2441 | 2024-03-29 | Sashi          | W   | 0.505      | 0.333        | 0.018 (0.003)    | 0.039 (0.007)    | 0 (0.000) |     8.05 | dem0n, dezt, Krabeni, Magic, makazze     |
|            7 |     2488 | 2024-03-27 | Metizport      | L   | 0.494      | -            | -                | -                | -         |    -2.61 | dem0n, dezt, Krabeni, Magic, makazze     |
|            6 |     3270 | 2024-02-20 | Czech Republic | L   | 0.252      | -            | -                | -                | -         |    -0.42 | alkarenn, dem0n, Krabeni, Magic, makazze |
|            5 |     3303 | 2024-02-19 | Viperio        | W   | 0.245      | 0.303        | 0.000 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     1.88 | alkarenn, dem0n, Krabeni, Magic, makazze |
|            4 |     3628 | 2024-02-02 | The Chosen Few | L   | 0.133      | -            | -                | -                | -         |    -2.19 | dem0n, fnl, Krabeni, Magic, makazze      |
|            3 |     3633 | 2024-02-02 | Zero Tenacity  | L   | 0.133      | -            | -                | -                | -         |    -0.41 | dem0n, fnl, Krabeni, Magic, makazze      |
|            2 |     3635 | 2024-02-02 | The Chosen Few | W   | 0.132      | 0.143        | 0.001 (0.000)    | 0.100 (0.002)    | 0 (0.000) |     2.01 | dem0n, fnl, Krabeni, Magic, makazze      |
|            1 |     4062 | 2024-01-17 | Portugal       | L   | 0.028      | -            | -                | -                | -         |    -0.39 | dem0n, fnl, Krabeni, Magic, makazze      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,536.25)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
