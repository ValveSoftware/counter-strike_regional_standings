### Roster Details<br />
Team Name: Bad News Kangaroos<br />
Roster: ADDICT, BRACE, damyo, hazr, pz<br />
Global Rank: [164](../../standings_global_2024_09_18.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_09_18.md)<br />
Regional Rank: [15]( ../../standings_asia_2024_09_18.md)<br />
<br />
Final Rank Value:  664.1<br />
<br />
Final Rank Value (664.1) = Starting Rank Value (657.1) + Head To Head Adjustments (7.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.313[<sup>1</sup>](#table2)
- Bounty Collected: 0.207[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.001[<sup>2</sup>](#table1)

The average of these factors is 0.131<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 657.1
- 400 + ( ( 0.131 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 657.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     3845 | 2024-05-03 | FURIA     | L   | 0.280      | -            | -                | -                | -         |    -0.02 | ADDICT, BRACE, damyo, hazr, pz |
|           14 |     3890 | 2024-05-01 | ENCE      | L   | 0.267      | -            | -                | -                | -         |    -0.40 | ADDICT, BRACE, damyo, hazr, pz |
|           13 |     3923 | 2024-04-30 | MOUZ      | L   | 0.259      | -            | -                | -                | -         |    -0.01 | ADDICT, BRACE, damyo, hazr, pz |
|           12 |     4145 | 2024-04-20 | FlyQuest  | L   | 0.193      | -            | -                | -                | -         |    -0.79 | ADDICT, BRACE, damyo, hazr, pz |
|           11 |     4149 | 2024-04-20 | Rooster   | W   | 0.192      | 0.143        | 0.019 (0.001)    | 0.323 (0.009)    | 0 (0.000) |     3.79 | ADDICT, BRACE, damyo, hazr, pz |
|           10 |     4194 | 2024-04-19 | Mindfreak | W   | 0.186      | 0.143        | 0.003 (0.000)    | 0.231 (0.006)    | 0 (0.000) |     3.12 | ADDICT, BRACE, damyo, hazr, pz |
|            9 |     4197 | 2024-04-19 | Rooster   | L   | 0.185      | -            | -                | -                | -         |    -2.16 | ADDICT, BRACE, damyo, hazr, pz |
|            8 |     4446 | 2024-04-10 | Rooster   | W   | 0.125      | 0.333        | 0.019 (0.001)    | 0.323 (0.014)    | 0 (0.000) |     2.49 | ADDICT, BRACE, damyo, hazr, pz |
|            7 |     4456 | 2024-04-10 | Rooster   | L   | 0.125      | -            | -                | -                | -         |    -1.47 | ADDICT, BRACE, damyo, hazr, pz |
|            6 |     4681 | 2024-04-03 | DXA       | W   | 0.079      | 0.333        | 0.001 (0.000)    | 0.199 (0.005)    | 0 (0.000) |     1.20 | ADDICT, BRACE, damyo, hazr, pz |
|            5 |     4685 | 2024-04-03 | DXA       | W   | 0.078      | 0.333        | 0.001 (0.000)    | 0.199 (0.005)    | 0 (0.000) |     1.20 | ADDICT, BRACE, damyo, hazr, pz |
|            4 |     4805 | 2024-03-27 | Mindfreak | L   | 0.032      | -            | -                | -                | -         |    -0.56 | ADDICT, BRACE, damyo, hazr, pz |
|            3 |     4812 | 2024-03-27 | Mindfreak | W   | 0.032      | 0.333        | 0.003 (0.000)    | 0.009 (0.000)    | 0 (0.000) |     0.45 | ADDICT, BRACE, damyo, hazr, pz |
|            2 |     4855 | 2024-03-23 | DXA       | W   | 0.006      | 0.315        | 0.001 (0.000)    | 0.199 (0.000)    | 1 (0.006) |     0.09 | ADDICT, BRACE, damyo, hazr, pz |
|            1 |     4858 | 2024-03-23 | VexX      | W   | 0.005      | 0.315        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.005) |     0.04 | ADDICT, BRACE, damyo, hazr, pz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,762.03)
- Divide that value by the 5th highest value among all rosters ($274,303.95)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.525 | $1,050.00      | $551.33         |
| 2024-05-12 |      0.341 | $3,500.00      | $1,192.47       |
| 2024-03-23 |      0.006 | $3,308.00      | $18.24          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
