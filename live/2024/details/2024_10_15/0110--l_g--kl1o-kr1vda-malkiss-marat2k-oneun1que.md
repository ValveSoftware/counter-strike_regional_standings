### Roster Details<br />
Team Name: L&G<br />
Roster: kL1o, kr1vda, Malkiss, marat2k, OneUn1que<br />
Global Rank: [110](../../standings_global_2024_10_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_15.md)<br />
Regional Rank: [77]( ../../standings_europe_2024_10_15.md)<br />
<br />
Final Rank Value:  810.6<br />
<br />
Final Rank Value (810.6) = Starting Rank Value (748.2) + Head To Head Adjustments (62.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.358[<sup>1</sup>](#table2)
- Bounty Collected: 0.286[<sup>2</sup>](#table1)
- Opponent Network: 0.073[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.179<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 748.2
- 400 + ( ( 0.179 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 748.2


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
|           13 |      143 | 2024-10-08 | NAVI Junior | L   | 1.000      | -            | -                | -                | -         |    -8.77 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|           12 |      194 | 2024-10-06 | UNiTY       | W   | 1.000      | 0.333        | 0.043 (0.014)    | 0.461 (0.154)    | 0 (0.000) |    22.43 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|           11 |      257 | 2024-10-04 | Illuminar   | W   | 1.000      | 0.333        | 0.009 (0.003)    | 0.437 (0.146)    | 0 (0.000) |    16.83 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|           10 |      383 | 2024-10-01 | Heimo       | W   | 1.000      | 0.333        | 0.003 (0.001)    | 0.132 (0.044)    | 0 (0.000) |     8.85 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|            9 |      421 | 2024-09-29 | kONO        | W   | 1.000      | 0.288        | 0.022 (0.006)    | 0.400 (0.115)    | 0 (0.000) |    17.20 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|            8 |      436 | 2024-09-29 | SkyFury     | W   | 1.000      | 0.288        | 0.002 (0.000)    | 0.015 (0.004)    | 0 (0.000) |     6.96 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|            7 |      890 | 2024-09-16 | kONO        | L   | 1.000      | -            | -                | -                | -         |   -12.92 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|            6 |      923 | 2024-09-15 | Apogee      | W   | 1.000      | 0.333        | 0.016 (0.005)    | 0.552 (0.184)    | 0 (0.000) |    20.72 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|            5 |      964 | 2024-09-14 | ECLOT       | L   | 0.992      | -            | -                | -                | -         |    -4.76 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|            4 |     1055 | 2024-09-11 | Preasy      | W   | 0.973      | 0.333        | 0.004 (0.001)    | 0.121 (0.039)    | 0 (0.000) |    11.69 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|            3 |     1075 | 2024-09-10 | Molotov     | L   | 0.968      | -            | -                | -                | -         |   -14.84 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|            2 |     1142 | 2024-09-07 | DASH        | W   | 0.948      | 0.372        | 0.000 (0.000)    | 0.125 (0.044)    | 0 (0.000) |    10.41 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|            1 |     1275 | 2024-09-03 | CPH Wolves  | L   | 0.921      | -            | -                | -                | -         |   -11.44 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,950.00)
- Divide that value by the 5th highest value among all rosters ($308,815.62)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-08 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-09-29 |      1.000 | $1,950.00      | $1,950.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
