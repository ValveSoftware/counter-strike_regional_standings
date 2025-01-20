### Roster Details<br />
Team Name: Viperio<br />
Roster: dezt, shyyne, Skrimo, swicher, zodi<br />
Global Rank: [183](../../standings_global_2025_01_20.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_20.md)<br />
Regional Rank: [117]( ../../standings_europe_2025_01_20.md)<br />
<br />
Final Rank Value:  630.1<br />
<br />
Final Rank Value (630.1) = Starting Rank Value (670.0) + Head To Head Adjustments (-39.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.295[<sup>1</sup>](#table2)
- Bounty Collected: 0.234[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.136<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 670.0
- 400 + ( ( 0.136 - 0.000 ) / ( 0.805 - 0.000 ) ) * 1600 = 670.0


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
|           15 |      144 | 2024-12-19 | Astralis Talent   | L   | 0.991      | -            | -                | -                | -         |   -11.36 | dezt, shyyne, Skrimo, swicher, zodi  |
|           14 |      155 | 2024-12-18 | WOPA              | L   | 0.984      | -            | -                | -                | -         |    -5.65 | dezt, shyyne, Skrimo, swicher, zodi  |
|           13 |      440 | 2024-12-03 | FORZE Reload      | L   | 0.885      | -            | -                | -                | -         |    -9.79 | dezt, shyyne, Skrimo, swicher, zodi  |
|           12 |      460 | 2024-12-02 | Illuminar         | W   | 0.878      | 0.333        | 0.018 (0.005)    | 0.483 (0.141)    | 0 (0.000) |    21.58 | dezt, shyyne, Skrimo, swicher, zodi  |
|           11 |      473 | 2024-12-01 | ALTERNATE aTTaX   | L   | 0.873      | -            | -                | -                | -         |    -3.07 | dezt, shyyne, Skrimo, swicher, zodi  |
|           10 |      560 | 2024-11-27 | BC.Game           | L   | 0.846      | -            | -                | -                | -         |    -5.54 | dezt, shyyne, Skrimo, swicher, zodi  |
|            9 |      610 | 2024-11-24 | Gaimin Gladiators | L   | 0.824      | -            | -                | -                | -         |    -3.40 | dezt, shyyne, Skrimo, swicher, zodi  |
|            8 |      660 | 2024-11-22 | Aurora Young Blud | L   | 0.811      | -            | -                | -                | -         |    -4.06 | dezt, shyyne, Skrimo, swicher, zodi  |
|            7 |      879 | 2024-11-13 | GenOne            | L   | 0.750      | -            | -                | -                | -         |    -6.94 | dezt, Silence, Skrimo, swicher, zodi |
|            6 |      906 | 2024-11-12 | L&G               | L   | 0.744      | -            | -                | -                | -         |    -5.56 | dezt, shyyne, Skrimo, swicher, zodi  |
|            5 |     1325 | 2024-10-21 | CPH Wolves        | L   | 0.597      | -            | -                | -                | -         |    -5.71 | dezt, shyyne, Skrimo, swicher, zodi  |
|            4 |     1374 | 2024-10-19 | ADEPTS            | W   | 0.584      | 0.333        | 0.000 (0.000)    | 0.067 (0.013)    | 0 (0.000) |     5.47 | dezt, shyyne, Skrimo, swicher, zodi  |
|            3 |     1403 | 2024-10-18 | NAVI Junior       | L   | 0.577      | -            | -                | -                | -         |    -1.79 | dezt, shyyne, Skrimo, swicher, zodi  |
|            2 |     1775 | 2024-10-03 | NAVI Junior       | L   | 0.477      | -            | -                | -                | -         |    -1.48 | dezt, shyyne, Skrimo, swicher, zodi  |
|            1 |     1814 | 2024-10-02 | UNiTY             | L   | 0.471      | -            | -                | -                | -         |    -2.57 | dezt, shyyne, Skrimo, swicher, zodi  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($892.10)
- Divide that value by the 5th highest value among all rosters ($221,379.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
