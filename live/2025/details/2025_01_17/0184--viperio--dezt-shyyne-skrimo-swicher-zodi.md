### Roster Details<br />
Team Name: Viperio<br />
Roster: dezt, shyyne, Skrimo, swicher, zodi<br />
Global Rank: [184](../../standings_global_2025_01_17.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_17.md)<br />
Regional Rank: [117]( ../../standings_europe_2025_01_17.md)<br />
<br />
Final Rank Value:  629.6<br />
<br />
Final Rank Value (629.6) = Starting Rank Value (669.8) + Head To Head Adjustments (-40.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.294[<sup>1</sup>](#table2)
- Bounty Collected: 0.234[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.136<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 669.8
- 400 + ( ( 0.136 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 669.8


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
|           15 |      135 | 2024-12-19 | Astralis Talent   | L   | 1.000      | -            | -                | -                | -         |   -11.48 | dezt, shyyne, Skrimo, swicher, zodi  |
|           14 |      146 | 2024-12-18 | WOPA              | L   | 0.998      | -            | -                | -                | -         |    -5.74 | dezt, shyyne, Skrimo, swicher, zodi  |
|           13 |      431 | 2024-12-03 | FORZE Reload      | L   | 0.898      | -            | -                | -                | -         |    -9.92 | dezt, shyyne, Skrimo, swicher, zodi  |
|           12 |      451 | 2024-12-02 | Illuminar         | W   | 0.892      | 0.333        | 0.018 (0.005)    | 0.481 (0.143)    | 0 (0.000) |    21.91 | dezt, shyyne, Skrimo, swicher, zodi  |
|           11 |      464 | 2024-12-01 | ALTERNATE aTTaX   | L   | 0.886      | -            | -                | -                | -         |    -3.13 | dezt, shyyne, Skrimo, swicher, zodi  |
|           10 |      551 | 2024-11-27 | BC.Game           | L   | 0.859      | -            | -                | -                | -         |    -5.58 | dezt, shyyne, Skrimo, swicher, zodi  |
|            9 |      601 | 2024-11-24 | Gaimin Gladiators | L   | 0.837      | -            | -                | -                | -         |    -3.40 | dezt, shyyne, Skrimo, swicher, zodi  |
|            8 |      651 | 2024-11-22 | Aurora Young Blud | L   | 0.825      | -            | -                | -                | -         |    -4.08 | dezt, shyyne, Skrimo, swicher, zodi  |
|            7 |      870 | 2024-11-13 | GenOne            | L   | 0.764      | -            | -                | -                | -         |    -7.06 | dezt, Silence, Skrimo, swicher, zodi |
|            6 |      897 | 2024-11-12 | L&G               | L   | 0.758      | -            | -                | -                | -         |    -5.63 | dezt, shyyne, Skrimo, swicher, zodi  |
|            5 |     1316 | 2024-10-21 | CPH Wolves        | L   | 0.611      | -            | -                | -                | -         |    -5.81 | dezt, shyyne, Skrimo, swicher, zodi  |
|            4 |     1365 | 2024-10-19 | ADEPTS            | W   | 0.598      | 0.333        | 0.000 (0.000)    | 0.066 (0.013)    | 0 (0.000) |     5.59 | dezt, shyyne, Skrimo, swicher, zodi  |
|            3 |     1394 | 2024-10-18 | NAVI Junior       | L   | 0.591      | -            | -                | -                | -         |    -1.80 | dezt, shyyne, Skrimo, swicher, zodi  |
|            2 |     1766 | 2024-10-03 | NAVI Junior       | L   | 0.491      | -            | -                | -                | -         |    -1.50 | dezt, shyyne, Skrimo, swicher, zodi  |
|            1 |     1805 | 2024-10-02 | UNiTY             | L   | 0.484      | -            | -                | -                | -         |    -2.61 | dezt, shyyne, Skrimo, swicher, zodi  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($905.67)
- Divide that value by the 5th highest value among all rosters ($225,816.70)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
