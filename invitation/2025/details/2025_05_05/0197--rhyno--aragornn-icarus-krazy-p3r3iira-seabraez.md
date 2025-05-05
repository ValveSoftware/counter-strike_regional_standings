### Roster Details<br />
Team Name: Rhyno<br />
Roster: aragornN, Icarus, krazy, P3R3IIRA, seabraez<br />
Global Rank: [197](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [118]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  592.9<br />
<br />
Final Rank Value (592.9) = Starting Rank Value (632.2) + Head To Head Adjustments (-39.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.280[<sup>1</sup>](#table2)
- Bounty Collected: 0.202[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.026[<sup>2</sup>](#table1)

The average of these factors is 0.128<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 632.2
- 400 + ( ( 0.128 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 632.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     1071 | 2025-03-15 | Leça             | L   | 0.861      | -            | -                | -                | -         |   -11.20 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|           13 |     1599 | 2025-02-27 | BC.Game          | L   | 0.752      | -            | -                | -                | -         |    -2.45 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|           12 |     1629 | 2025-02-26 | Alliance         | L   | 0.745      | -            | -                | -                | -         |    -7.66 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|           11 |     1778 | 2025-02-20 | Betclic          | L   | 0.705      | -            | -                | -                | -         |    -2.25 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|           10 |     1785 | 2025-02-19 | PARIVISION       | L   | 0.699      | -            | -                | -                | -         |    -3.46 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            9 |     1832 | 2025-02-17 | Mercenaires      | L   | 0.686      | -            | -                | -                | -         |   -14.93 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            8 |     2424 | 2025-01-09 | Insilio          | L   | 0.426      | -            | -                | -                | -         |    -8.59 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            7 |     2433 | 2025-01-06 | FLuffy Gangsters | W   | 0.408      | 0.143        | 0.001 (0.000)    | 0.098 (0.006)    | 0 (0.000) |     5.65 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            6 |     2444 | 2025-01-04 | CS2News          | W   | 0.392      | 0.143        | 0.000 (0.000)    | 0.039 (0.002)    | 0 (0.000) |     3.84 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            5 |     2446 | 2025-01-03 | kONO             | L   | 0.387      | -            | -                | -                | -         |    -8.16 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            4 |     2459 | 2024-12-28 | BRUTE            | W   | 0.345      | 0.143        | 0.001 (0.000)    | 0.026 (0.001)    | 0 (0.000) |     4.71 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            3 |     3041 | 2024-11-22 | GTZ              | W   | 0.107      | 0.262        | 0.028 (0.001)    | 0.336 (0.009)    | 1 (0.107) |     2.63 | aragornN, Icarus, P3R3IIRA, seabraez, Shr   |
|            2 |     3131 | 2024-11-17 | Iberian Soul     | W   | 0.074      | 0.336        | 0.010 (0.000)    | 0.716 (0.018)    | 1 (0.074) |     1.84 | aragornN, Icarus, P3R3IIRA, seabraez, Shr   |
|            1 |     3167 | 2024-11-16 | Agency           | W   | 0.066      | 0.336        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.066) |     0.70 | aragornN, Icarus, P3R3IIRA, seabraez, Shr   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($969.58)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-03-16 |      0.867 | $542.00        | $469.95         |
| 2024-11-22 |      0.107 | $1,000.00      | $106.77         |
| 2024-11-17 |      0.074 | $5,329.00      | $392.85         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
