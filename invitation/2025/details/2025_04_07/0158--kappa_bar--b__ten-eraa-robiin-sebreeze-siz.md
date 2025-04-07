### Roster Details<br />
Team Name: Kappa Bar<br />
Roster: Bååten, eraa, robiin, SeBreeZe, Siz<br />
Global Rank: [158](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [99]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  649.6<br />
<br />
Final Rank Value (649.6) = Starting Rank Value (650.2) + Head To Head Adjustments (-0.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.304[<sup>1</sup>](#table2)
- Bounty Collected: 0.182[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.058[<sup>2</sup>](#table1)

The average of these factors is 0.136<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 650.2
- 400 + ( ( 0.136 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 650.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |     2292 | 2024-11-22 | Alliance        | L   | 0.293      | -            | -                | -                | -         |    -2.77 | Bååten, eraa, robiin, SeBreeZe, Siz  |
|            8 |     2313 | 2024-11-21 | Johnny Speeds   | L   | 0.288      | -            | -                | -                | -         |    -3.04 | Bååten, eraa, robiin, SeBreeZe, Siz  |
|            7 |     2323 | 2024-11-21 | Kario Mart      | W   | 0.285      | 0.377        | 0.003 (0.000)    | 0.010 (0.001)    | 1 (0.285) |     3.00 | Bååten, eraa, robiin, SeBreeZe, Siz  |
|            6 |     2406 | 2024-11-16 | Northern Lights | W   | 0.254      | 0.262        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.254) |     2.47 | eraa, robiin, SeBreeZe, Siz, Twinkey |
|            5 |     2648 | 2024-11-07 | Metizport       | L   | 0.196      | -            | -                | -                | -         |    -0.68 | eraa, robiin, SeBreeZe, Siz, virree  |
|            4 |     2707 | 2024-11-04 | Lilmix          | W   | 0.174      | 0.143        | 0.000 (0.000)    | 0.006 (0.000)    | 0 (0.000) |     1.65 | Bååten, eraa, robiin, SeBreeZe, Siz  |
|            3 |     2908 | 2024-10-26 | EYEBALLERS      | L   | 0.112      | -            | -                | -                | -         |    -1.43 | eraa, Lekr0, robiin, Sapec, SeBreeZe |
|            2 |     3141 | 2024-10-13 | megoshort       | W   | 0.028      | 0.143        | 0.000 (0.000)    | 0.001 (0.000)    | 0 (0.000) |     0.22 | eraa, Ludwig, robiin, Siz, virree    |
|            1 |     3224 | 2024-10-09 | megoshort       | W   | 0.001      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.01 | eraa, robiin, SeBreeZe, Siz, virree  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,409.26)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-23 |      0.301 | $2,831.00      | $852.08         |
| 2024-11-16 |      0.254 | $1,005.00      | $255.29         |
| 2024-11-09 |      0.207 | $1,455.00      | $301.90         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
