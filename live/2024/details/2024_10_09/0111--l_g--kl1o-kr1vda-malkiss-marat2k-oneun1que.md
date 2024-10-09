### Roster Details<br />
Team Name: L&G<br />
Roster: kL1o, kr1vda, Malkiss, marat2k, OneUn1que<br />
Global Rank: [111](../../standings_global_2024_10_09.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_09.md)<br />
Regional Rank: [78]( ../../standings_europe_2024_10_09.md)<br />
<br />
Final Rank Value:  812.0<br />
<br />
Final Rank Value (812.0) = Starting Rank Value (747.8) + Head To Head Adjustments (64.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.359[<sup>1</sup>](#table2)
- Bounty Collected: 0.288[<sup>2</sup>](#table1)
- Opponent Network: 0.073[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.180<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 747.8
- 400 + ( ( 0.180 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 747.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |       46 | 2024-10-08 | NAVI Junior | L   | 1.000      | -            | -                | -                | -         |    -9.11 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|           12 |       97 | 2024-10-06 | UNiTY       | W   | 1.000      | 0.333        | 0.046 (0.015)    | 0.470 (0.157)    | 0 (0.000) |    22.37 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|           11 |      160 | 2024-10-04 | Illuminar   | W   | 1.000      | 0.333        | 0.010 (0.003)    | 0.378 (0.126)    | 0 (0.000) |    17.00 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|           10 |      286 | 2024-10-01 | Heimo       | W   | 1.000      | 0.333        | 0.003 (0.001)    | 0.135 (0.045)    | 0 (0.000) |     8.90 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|            9 |      324 | 2024-09-29 | kONO        | W   | 1.000      | 0.288        | 0.024 (0.007)    | 0.416 (0.120)    | 0 (0.000) |    17.34 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|            8 |      339 | 2024-09-29 | SkyFury     | W   | 1.000      | 0.288        | 0.002 (0.000)    | 0.016 (0.005)    | 0 (0.000) |     6.94 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|            7 |      793 | 2024-09-16 | kONO        | L   | 1.000      | -            | -                | -                | -         |   -12.75 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|            6 |      826 | 2024-09-15 | Apogee      | W   | 1.000      | 0.333        | 0.017 (0.006)    | 0.558 (0.186)    | 0 (0.000) |    21.03 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|            5 |      867 | 2024-09-14 | ECLOT       | L   | 1.000      | -            | -                | -                | -         |    -4.81 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|            4 |      958 | 2024-09-11 | Preasy      | W   | 1.000      | 0.333        | 0.004 (0.001)    | 0.128 (0.043)    | 0 (0.000) |    12.09 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|            3 |      978 | 2024-09-10 | Molotov     | L   | 1.000      | -            | -                | -                | -         |   -15.31 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|            2 |     1045 | 2024-09-07 | DASH        | W   | 0.988      | 0.372        | 0.000 (0.000)    | 0.130 (0.048)    | 0 (0.000) |    10.97 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|            1 |     1178 | 2024-09-03 | CPH Wolves  | L   | 0.961      | -            | -                | -                | -         |   -10.49 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,950.00)
- Divide that value by the 5th highest value among all rosters ($304,769.86)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-08 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-09-29 |      1.000 | $1,950.00      | $1,950.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
