### Roster Details<br />
Team Name: FORZE<br />
Roster: NickelBack, SELLTER, shalfey, smooya, tN1R<br />
Global Rank: [122](../../standings_global_2024_09_18.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_18.md)<br />
Regional Rank: [86]( ../../standings_europe_2024_09_18.md)<br />
<br />
Final Rank Value:  788.0<br />
<br />
Final Rank Value (788.0) = Starting Rank Value (780.1) + Head To Head Adjustments (7.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.395[<sup>1</sup>](#table2)
- Bounty Collected: 0.335[<sup>2</sup>](#table1)
- Opponent Network: 0.019[<sup>2</sup>](#table1)
- LAN Wins: 0.028[<sup>2</sup>](#table1)

The average of these factors is 0.194<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 780.1
- 400 + ( ( 0.194 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 780.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     3830 | 2024-05-04 | Monte       | L   | 0.287      | -            | -                | -                | -         |    -2.82 | NickelBack, SELLTER, shalfey, smooya, tN1R |
|           13 |     3861 | 2024-05-02 | GamerLegion | L   | 0.275      | -            | -                | -                | -         |    -1.29 | NickelBack, SELLTER, shalfey, smooya, tN1R |
|           12 |     3888 | 2024-05-01 | FURIA       | W   | 0.268      | 0.889        | 0.385 (0.092)    | 0.583 (0.139)    | 1 (0.268) |     8.39 | NickelBack, SELLTER, shalfey, smooya, tN1R |
|           11 |     3910 | 2024-04-30 | Monte       | L   | 0.261      | -            | -                | -                | -         |    -2.53 | NickelBack, SELLTER, shalfey, smooya, tN1R |
|           10 |     4364 | 2024-04-12 | BIG         | L   | 0.141      | -            | -                | -                | -         |    -0.12 | kelieN, SELLTER, shalfey, sstiNiX, tN1R    |
|            9 |     4397 | 2024-04-11 | Aurora      | L   | 0.133      | -            | -                | -                | -         |    -0.16 | kelieN, SELLTER, shalfey, sstiNiX, tN1R    |
|            8 |     4429 | 2024-04-10 | TSM         | W   | 0.128      | 0.500        | 0.004 (0.000)    | 0.006 (0.000)    | 0 (0.000) |     1.20 | kelieN, SELLTER, shalfey, spirit, tN1R     |
|            7 |     4481 | 2024-04-09 | Apogee      | W   | 0.122      | 0.500        | 0.009 (0.001)    | 0.365 (0.022)    | 0 (0.000) |     1.93 | kelieN, SELLTER, shalfey, spirit, tN1R     |
|            6 |     4521 | 2024-04-08 | ENCE        | W   | 0.114      | 0.684        | 0.138 (0.011)    | 0.298 (0.023)    | 0 (0.000) |     3.29 | kelieN, SELLTER, shalfey, sstiNiX, tN1R    |
|            5 |     4798 | 2024-03-27 | 500         | L   | 0.034      | -            | -                | -                | -         |    -0.74 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            4 |     4829 | 2024-03-26 | Apeks       | W   | 0.027      | 0.500        | 0.010 (0.000)    | 0.047 (0.001)    | 0 (0.000) |     0.37 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            3 |     4834 | 2024-03-25 | B8          | L   | 0.021      | -            | -                | -                | -         |    -0.09 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            2 |     4839 | 2024-03-24 | BetBoom     | W   | 0.014      | 0.143        | 0.220 (0.000)    | 0.479 (0.001)    | 0 (0.000) |     0.39 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            1 |     4851 | 2024-03-23 | VP.Prodigy  | W   | 0.007      | 0.143        | 0.019 (0.000)    | 0.208 (0.000)    | 0 (0.000) |     0.12 | gokushima, r3salt, SELLTER, shalfey, tN1R  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,016.41)
- Divide that value by the 5th highest value among all rosters ($274,303.95)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.528 | $3,000.00      | $1,584.20       |
| 2024-05-12 |      0.341 | $7,000.00      | $2,384.94       |
| 2024-04-14 |      0.154 | $26,250.00     | $4,047.27       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
