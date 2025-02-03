### Roster Details<br />
Team Name: Viperio<br />
Roster: dezt, shyyne, Skrimo, swicher, zodi<br />
Global Rank: [185](../../standings_global_2025_02_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_03.md)<br />
Regional Rank: [114]( ../../standings_europe_2025_02_03.md)<br />
<br />
Final Rank Value:  623.1<br />
<br />
Final Rank Value (623.1) = Starting Rank Value (662.2) + Head To Head Adjustments (-39.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.296[<sup>1</sup>](#table2)
- Bounty Collected: 0.231[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.135<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 662.2
- 400 + ( ( 0.135 - 0.000 ) / ( 0.825 - 0.000 ) ) * 1600 = 662.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      465 | 2024-12-19 | Astralis Talent   | L   | 0.892      | -            | -                | -                | -         |   -10.38 | dezt, shyyne, Skrimo, swicher, zodi  |
|           14 |      476 | 2024-12-18 | WOPA              | L   | 0.886      | -            | -                | -                | -         |    -5.69 | dezt, shyyne, Skrimo, swicher, zodi  |
|           13 |      761 | 2024-12-03 | FORZE Reload      | L   | 0.786      | -            | -                | -                | -         |    -8.85 | dezt, shyyne, Skrimo, swicher, zodi  |
|           12 |      781 | 2024-12-02 | Illuminar         | W   | 0.779      | 0.333        | 0.018 (0.005)    | 0.486 (0.126)    | 0 (0.000) |    18.61 | dezt, shyyne, Skrimo, swicher, zodi  |
|           11 |      794 | 2024-12-01 | ALTERNATE aTTaX   | L   | 0.774      | -            | -                | -                | -         |    -3.09 | dezt, shyyne, Skrimo, swicher, zodi  |
|           10 |      881 | 2024-11-27 | BC.Game           | L   | 0.747      | -            | -                | -                | -         |    -5.39 | dezt, shyyne, Skrimo, swicher, zodi  |
|            9 |      931 | 2024-11-24 | Gaimin Gladiators | L   | 0.725      | -            | -                | -                | -         |    -3.58 | dezt, shyyne, Skrimo, swicher, zodi  |
|            8 |      981 | 2024-11-22 | Chimera           | L   | 0.712      | -            | -                | -                | -         |    -3.98 | dezt, shyyne, Skrimo, swicher, zodi  |
|            7 |     1200 | 2024-11-13 | GenOne            | L   | 0.652      | -            | -                | -                | -         |    -6.18 | dezt, Silence, Skrimo, swicher, zodi |
|            6 |     1227 | 2024-11-12 | L&G               | L   | 0.645      | -            | -                | -                | -         |    -5.16 | dezt, shyyne, Skrimo, swicher, zodi  |
|            5 |     1646 | 2024-10-21 | CPH Wolves        | L   | 0.498      | -            | -                | -                | -         |    -4.76 | dezt, shyyne, Skrimo, swicher, zodi  |
|            4 |     1695 | 2024-10-19 | ADEPTS            | W   | 0.485      | 0.333        | 0.000 (0.000)    | 0.068 (0.011)    | 0 (0.000) |     4.64 | dezt, shyyne, Skrimo, swicher, zodi  |
|            3 |     1724 | 2024-10-18 | NAVI Junior       | L   | 0.478      | -            | -                | -                | -         |    -1.54 | dezt, shyyne, Skrimo, swicher, zodi  |
|            2 |     2096 | 2024-10-03 | NAVI Junior       | L   | 0.378      | -            | -                | -                | -         |    -1.22 | dezt, shyyne, Skrimo, swicher, zodi  |
|            1 |     2135 | 2024-10-02 | UNiTY             | L   | 0.372      | -            | -                | -                | -         |    -2.49 | dezt, shyyne, Skrimo, swicher, zodi  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($793.23)
- Divide that value by the 5th highest value among all rosters ($188,876.95)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
