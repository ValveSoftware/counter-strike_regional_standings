### Roster Details<br />
Team Name: NAVI Junior<br />
Roster: dem0n, dezt, Krabeni, Magic, makazze<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [148](../standings_global.md)<br />
Regional Rank: [95]( ../standings_europe.md)<br />
Final Rank Value:  724.6<br />
<br />
Final Rank Value (724.6) = Starting Rank Value (710.0) + Head To Head Adjustments (14.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.315[<sup>1</sup>](#table2)
- Bounty Collected: 0.276[<sup>2</sup>](#table1)
- Opponent Network: 0.019[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.153<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 710.0
- 400 + ( ( 0.153 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 710.0


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
|           12 |     2296 | 2024-03-30 | GL Academy     | L   | 0.668      | -            | -                | -                | -         |    -8.84 | dem0n, dezt, Krabeni, Magic, makazze     |
|           11 |     2305 | 2024-03-29 | Passion UA     | W   | 0.662      | 0.333        | 0.086 (0.019)    | 0.803 (0.177)    | 0 (0.000) |    16.95 | dem0n, dezt, Krabeni, Magic, makazze     |
|           10 |     2308 | 2024-03-29 | Sashi          | W   | 0.660      | 0.333        | 0.021 (0.005)    | 0.045 (0.010)    | 0 (0.000) |    10.66 | dem0n, dezt, Krabeni, Magic, makazze     |
|            9 |     2355 | 2024-03-27 | Metizport      | L   | 0.649      | -            | -                | -                | -         |    -2.94 | dem0n, dezt, Krabeni, Magic, makazze     |
|            8 |     3137 | 2024-02-20 | ECLOT          | L   | 0.408      | -            | -                | -                | -         |    -0.73 | alkarenn, dem0n, Krabeni, Magic, makazze |
|            7 |     3170 | 2024-02-19 | Viperio        | W   | 0.400      | 0.303        | 0.000 (0.000)    | 0.016 (0.002)    | 0 (0.000) |     3.32 | alkarenn, dem0n, Krabeni, Magic, makazze |
|            6 |     3495 | 2024-02-02 | The Chosen Few | L   | 0.289      | -            | -                | -                | -         |    -4.70 | dem0n, fnl, Krabeni, Magic, makazze      |
|            5 |     3500 | 2024-02-02 | Zero Tenacity  | L   | 0.288      | -            | -                | -                | -         |    -0.90 | dem0n, fnl, Krabeni, Magic, makazze      |
|            4 |     3502 | 2024-02-02 | The Chosen Few | W   | 0.288      | 0.143        | 0.002 (0.000)    | 0.137 (0.006)    | 0 (0.000) |     4.44 | dem0n, fnl, Krabeni, Magic, makazze      |
|            3 |     3929 | 2024-01-17 | esmagaB        | L   | 0.183      | -            | -                | -                | -         |    -2.55 | dem0n, fnl, Krabeni, Magic, makazze      |
|            2 |     4274 | 2023-12-22 | ex-Anonymo     | L   | 0.007      | -            | -                | -                | -         |    -0.14 | dem0n, fnl, Krabeni, Magic, makazze      |
|            1 |     4278 | 2023-12-21 | NOM            | W   | 0.000      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.00 | dem0n, fnl, Krabeni, Magic, makazze      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,023.68)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-30 |      0.668 | $3,000.00      | $2,003.27       |
| 2023-12-23 |      0.014 | $1,500.00      | $20.42          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
