### Roster Details<br />
Team Name: Complexity<br />
Roster: EliGE, floppy, Grim, hallzerk, JT<br />
Global Rank: [12](../../standings_global_2024_10_23.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_10_23.md)<br />
Regional Rank: [3]( ../../standings_americas_2024_10_23.md)<br />
<br />
Final Rank Value:  1599.2<br />
<br />
Final Rank Value (1599.2) = Starting Rank Value (1625.4) + Head To Head Adjustments (-26.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.664[<sup>1</sup>](#table2)
- Bounty Collected: 0.683[<sup>2</sup>](#table1)
- Opponent Network: 0.226[<sup>2</sup>](#table1)
- LAN Wins: 0.929[<sup>2</sup>](#table1)

The average of these factors is 0.625<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1625.4
- 400 + ( ( 0.625 - 0.000 ) / ( 0.816 - 0.000 ) ) * 1600 = 1625.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           42 |      306 | 2024-10-08 | MOUZ            | L   | 1.000      | -            | -                | -                | -         |    -8.19 | EliGE, floppy, Grim, hallzerk, JT |
|           41 |      328 | 2024-10-07 | Imperial        | W   | 1.000      | 0.624        | 0.161 (0.100)    | 0.573 (0.358)    | 1 (1.000) |     2.92 | EliGE, floppy, Grim, hallzerk, JT |
|           40 |      339 | 2024-10-07 | Liquid          | L   | 1.000      | -            | -                | -                | -         |   -11.92 | EliGE, floppy, Grim, hallzerk, JT |
|           39 |     1011 | 2024-09-18 | Liquid          | L   | 0.967      | -            | -                | -                | -         |   -12.22 | EliGE, floppy, Grim, hallzerk, JT |
|           38 |     1042 | 2024-09-17 | FaZe            | W   | 0.960      | 0.889        | 0.558 (0.476)    | 0.304 (0.259)    | 1 (0.960) |    17.86 | EliGE, floppy, Grim, hallzerk, JT |
|           37 |     1104 | 2024-09-15 | MOUZ            | W   | 0.945      | 0.889        | 1.000 (0.840)    | 0.359 (0.302)    | 1 (0.945) |    22.94 | EliGE, floppy, Grim, hallzerk, JT |
|           36 |     1121 | 2024-09-14 | Astralis        | W   | 0.939      | 0.889        | 0.263 (0.219)    | 0.201 (0.168)    | 1 (0.939) |     7.44 | EliGE, floppy, Grim, hallzerk, JT |
|           35 |     1159 | 2024-09-13 | BIG             | L   | 0.933      | -            | -                | -                | -         |   -21.44 | EliGE, floppy, Grim, hallzerk, JT |
|           34 |     1187 | 2024-09-12 | MOUZ            | W   | 0.926      | 0.889        | 1.000 (0.824)    | 0.359 (0.296)    | 1 (0.926) |    23.35 | EliGE, floppy, Grim, hallzerk, JT |
|           33 |     1224 | 2024-09-11 | Astralis        | W   | 0.919      | 0.889        | 0.263 (0.215)    | 0.201 (0.164)    | 1 (0.919) |     7.79 | EliGE, floppy, Grim, hallzerk, JT |
|           32 |     1251 | 2024-09-10 | M80             | L   | 0.913      | -            | -                | -                | -         |   -22.18 | EliGE, floppy, Grim, hallzerk, JT |
|           31 |     1836 | 2024-08-24 | Falcons         | L   | 0.799      | -            | -                | -                | -         |   -18.96 | EliGE, floppy, Grim, hallzerk, JT |
|           30 |     1889 | 2024-08-22 | Metizport       | W   | 0.786      | 0.535        | -                | 0.462 (0.194)    | -         |     0.56 | EliGE, floppy, Grim, hallzerk, JT |
|           29 |     2195 | 2024-08-13 | Liquid          | L   | 0.725      | -            | -                | -                | -         |    -8.44 | EliGE, floppy, Grim, hallzerk, JT |
|           28 |     2239 | 2024-08-12 | MOUZ            | L   | 0.719      | -            | -                | -                | -         |    -4.09 | EliGE, floppy, Grim, hallzerk, JT |
|           27 |     2288 | 2024-08-10 | Virtus.pro      | W   | 0.705      | 1.000        | 0.457 (0.322)    | 0.307 (0.216)    | 1 (0.705) |    11.68 | EliGE, floppy, Grim, hallzerk, JT |
|           26 |     2332 | 2024-08-08 | Eternal Fire    | W   | 0.693      | 0.143        | 0.973 (0.096)    | -                | 1 (0.693) |    17.97 | EliGE, floppy, Grim, hallzerk, JT |
|           25 |     2384 | 2024-08-07 | ALTERNATE aTTaX | W   | 0.685      | -            | -                | -                | 1 (0.685) |     0.52 | EliGE, floppy, Grim, hallzerk, JT |
|           24 |     2486 | 2024-08-04 | Natus Vincere   | L   | 0.666      | -            | -                | -                | -         |    -2.27 | EliGE, floppy, Grim, hallzerk, JT |
|           23 |     2533 | 2024-08-03 | Spirit          | L   | 0.658      | -            | -                | -                | -         |    -2.98 | EliGE, floppy, Grim, hallzerk, JT |
|           22 |     2567 | 2024-08-02 | HEROIC          | W   | 0.651      | 0.581        | 0.417 (0.158)    | 0.516 (0.195)    | 1 (0.651) |    13.00 | EliGE, floppy, Grim, hallzerk, JT |
|           21 |     2694 | 2024-07-30 | OG              | W   | 0.632      | -            | -                | -                | -         |     0.07 | EliGE, floppy, Grim, hallzerk, JT |
|           20 |     2725 | 2024-07-29 | HEROIC          | L   | 0.625      | -            | -                | -                | -         |    -7.12 | EliGE, floppy, Grim, hallzerk, JT |
|           19 |     3102 | 2024-07-18 | M80             | L   | 0.551      | -            | -                | -                | -         |   -13.70 | EliGE, floppy, Grim, hallzerk, JT |
|           18 |     3151 | 2024-07-17 | Virtus.pro      | L   | 0.547      | -            | -                | -                | -         |    -7.76 | EliGE, floppy, Grim, hallzerk, JT |
|           17 |     3484 | 2024-06-16 | Falcons         | W   | 0.339      | -            | -                | -                | -         |     2.42 | EliGE, floppy, Grim, hallzerk, JT |
|           16 |     3493 | 2024-06-16 | Aurora          | W   | 0.337      | -            | -                | -                | -         |     1.05 | EliGE, floppy, Grim, hallzerk, JT |
|           15 |     3523 | 2024-06-15 | MIBR            | W   | 0.332      | -            | -                | -                | -         |     2.50 | EliGE, floppy, Grim, hallzerk, JT |
|           14 |     3558 | 2024-06-14 | ENCE            | L   | 0.326      | -            | -                | -                | -         |    -7.30 | EliGE, floppy, Grim, hallzerk, JT |
|           13 |     3568 | 2024-06-14 | Alliance        | W   | 0.324      | -            | -                | -                | -         |     0.10 | EliGE, floppy, Grim, hallzerk, JT |
|           12 |     3892 | 2024-06-06 | FURIA           | L   | 0.273      | -            | -                | -                | -         |    -3.43 | EliGE, floppy, Grim, hallzerk, JT |
|           11 |     3911 | 2024-06-06 | BetBoom         | L   | 0.271      | -            | -                | -                | -         |    -7.90 | EliGE, floppy, Grim, hallzerk, JT |
|           10 |     3922 | 2024-06-06 | fnatic          | L   | 0.271      | -            | -                | -                | -         |    -7.18 | EliGE, floppy, Grim, hallzerk, JT |
|            9 |     3961 | 2024-06-05 | BIG             | W   | 0.265      | -            | -                | -                | -         |     2.63 | EliGE, floppy, Grim, hallzerk, JT |
|            8 |     3975 | 2024-06-05 | Eternal Fire    | W   | 0.264      | 0.715        | 0.973 (0.184)    | 0.574 (0.108)    | -         |     6.97 | EliGE, floppy, Grim, hallzerk, JT |
|            7 |     4196 | 2024-05-27 | MOUZ            | L   | 0.209      | -            | -                | -                | -         |    -1.20 | EliGE, floppy, Grim, hallzerk, JT |
|            6 |     4208 | 2024-05-27 | Liquid          | L   | 0.206      | -            | -                | -                | -         |    -3.06 | EliGE, floppy, Grim, hallzerk, JT |
|            5 |     4699 | 2024-05-11 | MOUZ            | L   | 0.100      | -            | -                | -                | -         |    -0.59 | EliGE, floppy, Grim, hallzerk, JT |
|            4 |     4753 | 2024-05-09 | Virtus.pro      | W   | 0.085      | -            | -                | -                | -         |     1.42 | EliGE, floppy, Grim, hallzerk, JT |
|            3 |     4820 | 2024-05-05 | Natus Vincere   | W   | 0.060      | -            | -                | -                | -         |     1.69 | EliGE, floppy, Grim, hallzerk, JT |
|            2 |     4886 | 2024-05-02 | HEROIC          | W   | 0.039      | -            | -                | -                | -         |     0.76 | EliGE, floppy, Grim, hallzerk, JT |
|            1 |     4935 | 2024-04-30 | Qiang           | W   | 0.026      | -            | -                | -                | -         |     0.01 | EliGE, floppy, Grim, hallzerk, JT |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($84,324.55)
- Divide that value by the 5th highest value among all rosters ($270,964.47)
- The final value (0.31) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-13 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-09-22 |      0.993 | $23,500.00     | $23,346.92      |
| 2024-08-25 |      0.807 | $7,500.00      | $6,050.12       |
| 2024-08-18 |      0.760 | $16,000.00     | $12,161.26      |
| 2024-08-04 |      0.666 | $10,500.00     | $6,989.30       |
| 2024-07-21 |      0.574 | $10,000.00     | $5,736.03       |
| 2024-06-16 |      0.339 | $50,000.00     | $16,940.76      |
| 2024-06-09 |      0.293 | $8,000.00      | $2,341.78       |
| 2024-06-02 |      0.247 | $4,000.00      | $988.57         |
| 2024-05-12 |      0.106 | $45,000.00     | $4,769.81       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
